module.exports = {

  models: {
    connection: 'psqlProd',
    migrate: 'safe'
  },

  port: 80,

  session: {
    secret: process.env.SESSION_SECRET,
    adapter: 'redis',
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
    user: process.env.REDIS_USER,
    pass: process.env.REDIS_PASSWORD
  },

  sockets: {
    adapter: 'socket.io-redis',
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
    user: process.env.REDIS_USER,
    pass: process.env.REDIS_PASSWORD
  },

  log: {
    level: "silent"
  }

};
