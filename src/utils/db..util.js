const knex = require('knex');

const { HOST, USER, PASSWORD, DATABASE, DB_PORT } = process.env;

const connectionConfig = {
  host: HOST,
  user: USER,
  password: PASSWORD,
  database: DATABASE,
  port: DB_PORT
};

const config = {
  development: {
    client: 'pg',
    connection: connectionConfig,
    pool: { min: 0, max: 10 },
  },
};

const db = knex(config.development);

module.exports = db;
