module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'app',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
    operatorsAliases: true
  }
};
