/* eslint-disable prettier/prettier */
const bcrypt = require('bcryptjs');

module.exports = {
  up: (QueryInterface) =>
    QueryInterface.bulkInsert(
      'users',
      [
        {
          admin: true,
          username: 'terminal',
          password_hash: bcrypt.hashSync('123456', 8),
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          admin: false,
          username: 'portal',
          password_hash: bcrypt.hashSync('123456', 8),
          created_at: new Date(),
          updated_at: new Date()
        }
      ],
      {}
    ),

  down: () => {}
};
