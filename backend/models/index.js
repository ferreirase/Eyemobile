/* eslint-disable */
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const SequelizeErd = require('sequelize-erd');

const basename = path.basename(module.filename);
const env = process.env.NODE_ENV || 'development';
const db = {};
const sqlz = {};

fs.readdirSync(path.join(__dirname, '../models'))
  .filter(
    file =>
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
  )
  .forEach(file => {
    if (file != 'index.js') {
      const model = sequelize.import(
        path.join(__dirname, '../src/models', file)
      );
      db[model.name] = model;
    }
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

const svg = SequelizeErd(sqlz);
fs.writeFileSync('./erd.svg', svg);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
