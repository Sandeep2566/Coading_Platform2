const { createClient }  = require('redis');

const redisClient = createClient({
    username: 'default',
    password: process.env.REDIS_PASS,
    socket: {
        host: 'redis-19241.c91.us-east-1-3.ec2.redns.redis-cloud.com',
        port: 19241,
    }
});

module.exports = redisClient;