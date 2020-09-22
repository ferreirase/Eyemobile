/* eslint-disable arrow-parens */
/* eslint-disable no-undef */

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('transactions', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      // unique sequential number
      usn: {
        type: Sequelize.STRING,
        allowNull: false
      },
      value: {
        type: Sequelize.REAL,
        allowNull: false
      },
      flag: {
        type: Sequelize.STRING,
        allowNull: false
      },
      mode: {
        type: Sequelize.STRING,
        allowNull: false
      },
      date: {
        type: Sequelize.DATE,
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    }),
  down: queryInterface => queryInterface.dropTable('transactions')
};
