/* eslint-disable no-param-reassign */
/* eslint-disable prettier/prettier */
import Sequelize, { Model } from 'sequelize';

class Transaction extends Model {
  static init(sequelize) {
    super.init(
      {
        usn: Sequelize.STRING,
        value: Sequelize.REAL,
        flag: Sequelize.STRING,
        mode: Sequelize.STRING,
        date: Sequelize.DATE
      },
      {
        sequelize
      }
    );

    return this;
  }
}

export default Transaction;
