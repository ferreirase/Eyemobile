/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
/* eslint-disable prettier/prettier */
/* eslint-disable object-curly-newline */
/* eslint-disable class-methods-use-this */
import { isBefore, parseISO, addBusinessDays } from 'date-fns';
import Transaction from '../models/Transaction';
import User from '../models/User';
import FlagsAccepted from '../config/transactions/flags';
import ModesAccepted from '../config/transactions/modes';
import DeadlinesCard from '../config/transactions/deadlines';
import FeesCard from '../config/transactions/fees';

class TransactionController {
  async createTransaction(req, res) {
    const { usn, value, flag, mode, date } = req.body;
    const userExists = await User.findByPk(req.userID);

    if (!userExists) {
      return res.status(401).json({ message: 'User not found', statusCode: 401 });
    }

    if (!userExists.admin) {
      return res.status(401).json({ message: 'User not authorized', statusCode: 401 });
    }

    if (value < 0) {
      return res
        .status(400)
        .json({ message: 'Value field not be able negative', statusCode: 400 });
    }

    if (isBefore(parseISO(date), new Date())) {
      return res
        .status(400)
        .json({ message: 'Past dates are not allowed', statusCode: 400 });
    }

    if (!FlagsAccepted.includes(flag.toUpperCase())) {
      return res
        .status(400)
        .json({ message: 'Flag not accepted', statusCode: 400 });
    }

    if (!ModesAccepted.includes(mode.toLowerCase())) {
      return res.status(400).json({ message: 'Mode invalid', statusCode: 400 });
    }

    const newTransaction = await Transaction.create({
      usn,
      value: Number(value),
      flag: flag.toUpperCase(),
      mode: mode.toLowerCase(),
      date: parseISO(date)
    });

    return res.status(201).json(newTransaction);
  }

  async showAll(req, res) {
    const transactions = await Transaction.findAll({
      attributes: ['usn', 'value', 'flag', 'mode', 'date']
    });

    if (!transactions || transactions.length === 0) {
      return res
        .status(200)
        .json({ message: 'No transactions registered', statusCode: 200 });
    }

    const transactionsFormatted = transactions.map((transaction) => {
      const values = {
        usn: transaction.usn,
        value: transaction.value.toFixed(2),
        liquid: transaction.mode === 'debit'
          ? (
            transaction.value - ((transaction.value * FeesCard.debit) / 100))
            .toFixed(2)
          : (transaction.value - ((transaction.value * FeesCard.credit) / 100))
            .toFixed(2),
        flag: transaction.flag.toUpperCase(),
        mode: transaction.mode,
        date: transaction.date,
        dateDisponibility: transaction.mode === 'debit'
          ? addBusinessDays(transaction.date, DeadlinesCard.debit)
          : addBusinessDays(transaction.date, DeadlinesCard.credit + 1)
      };

      return values;
    });

    return res.status(200).json(transactionsFormatted);
  }
}

export default new TransactionController();
