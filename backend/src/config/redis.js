const { createClient }  = require('redis');

const redisClient = createClient({
    username: 'default',
    password: process.env.REDIS_PASS,
    socket: {
        host: 'redis-17730.c281.us-east-1-2.ec2.redns.redis-cloud.com',
        port: 17730
    }
});

module.exports = redisClient;