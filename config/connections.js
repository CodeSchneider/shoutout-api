module.exports.connections = {

  mysqlDev: {
    adapter: 'sails-mysql',
    host: 'localhost',
    user: 'root',
    database: 'shoutout'
  },

  psqlProd: {
    adapter: 'sails-postgresql',
    host: process.env.PSQL_HOST,
    user: process.env.PSQL_USER,
    password: process.env.PSQL_PASSWORD,
    port: 5432,
    ssl: true,
    database: process.env.PSQL_DATABASE
  }

};
