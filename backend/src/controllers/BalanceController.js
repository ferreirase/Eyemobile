/* eslint-disable array-callback-return */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
/* eslint-disable prettier/prettier */
/* eslint-disable object-curly-newline */
/* eslint-disable class-methods-use-this */
import { isValid, isBefore, isSameDay, parseISO, isAfter, addBusinessDays } from 'date-fns';
import Transaction from '../models/Transaction';
import DeadlinesCard from '../config/transactions/deadlines';
import FeesCard from '../config/transactions/fees';

class BalanceController {
  async getBalance(req, res) {
    const transactions = await Transaction.findAll({
      attributes: ['value', 'date', 'mode']
    });

    if (!transactions || transactions.length === 0) {
      return res
        .status(200)
        .json({ message: 'No transactions registered', statusCode: 200 });
    }

    const { date } = req.query;

    if (!date || !isValid(parseISO(date))) {
      return res.status(400).json({ message: 'Date invalid', statusCode: 400 });
    }

    if (isBefore(parseISO(date), new Date())) {
      return res.status(400)
        .json({ message: 'Past dates are not allowed', statusCode: 400 });
    }

    const transactionsFormatted = transactions.map((transaction) => {
      const values = {
        mode: transaction.mode,
        value: transaction.value.toFixed(2),
        liquid: transaction.mode === 'debit'
          ? (
            transaction.value - ((transaction.value * FeesCard.debit) / 100))
            .toFixed(2)
          : (transaction.value - ((transaction.value * FeesCard.credit) / 100))
            .toFixed(2),
        date: transaction.date,
        dateDisponibility: transaction.mode === 'debit'
          ? addBusinessDays(transaction.date, DeadlinesCard.debit)
          : addBusinessDays(transaction.date, DeadlinesCard.credit + 1)
      };

      return values;
    });

    let valueAvailable = 0;
    let valueReceivable = 0;

    transactionsFormatted.map((transaction) => {
      if (isSameDay(parseISO(date), transaction.dateDisponibility)
      || isAfter(parseISO(date), transaction.dateDisponibility)) {
        valueAvailable += Number(transaction.liquid);
      } else {
        valueReceivable += Number(transaction.liquid);
      }
    });

    return res.status(200).json({
      available: valueAvailable.toFixed(2),
      receivable: valueReceivable.toFixed(2),
    });
  }
}

export default new BalanceController();
