require('dotenv').config();

const NodeENV = process.env.NODE_ENV || 'develope';
const host = process.env.HOST || '127.0.0.0';
const port = process.env.PORT || '3010';
const DBHost = process.env.DB_HOST || '123';
const DBPort = process.env.DB_PORT || '456';
const DBUser = process.env.DB_USER || 'Google';
const DBPw = process.env.DB_PASSWORD || 'Apple';
const DBDb = process.env.DB_DATABASE || 'Hello';


const config = {
    env : NodeENV,
    port : port,
    db : {
            username : DBUser,
            password : DBPw,
            database : DBDb,
            port : DBPort,
            host : DBHost,
            dialect : "mysql",
            define : {
                freezeTableName : true,
                timestamps : false,
            }
        }
    }
module.exports = config