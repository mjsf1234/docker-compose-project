const redis = require("redis");

const client = redis.createClient({
  socket: {
    host: "redis",
    port: 6379,
  },
});

module.exports = client;
