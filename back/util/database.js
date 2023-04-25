const mySql = require('mysql2');
require('dotenv').config()

const pool = mySql.createPool({
    host: process.env.MYSQL_ADDON_HOST,
    user: process.env.MYSQL_ADDON_USER,
    port: process.env.MYSQL_ADDON_PORT,
    database: process.env.MYSQL_ADDON_DB,
    password: process.env.MYSQL_ADDON_PASSWORD

});

module.exports = pool.promise();