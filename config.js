require('dotenv').config();

const NodeENV = process.env.NODE_ENV || 'develope';
const host = process.env.HOST || '127.0.0.1';
const port = process.env.PORT || '3000';
const DBHost = process.env.DB_HOST || '127.0.0.1';
const DBPort = process.env.DB_PORT || '3306';
const DBUser = process.env.DB_USER || 'root';
const DBPw = process.env.DB_PASSWORD || 'Apple1984!';
const DBDb = process.env.DB_DATABASE || 'Miniproject';


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