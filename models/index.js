const config = require("../config")['db'];
const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    config.DBDb,
    config.DBUser,
    config.DBPw,
    config
);

const User = require("./user.model")(sequelize, Sequelize);
const Board = require("./board.model")(sequelize, Sequelize);
const Comment = require("./comment.model")(sequelize, Sequelize);
const Like = require("./like.model")(sequelize, Sequelize);

console.log(User);
console.log(Board);
console.log(Comment);
console.log(Like);


;(async ()=>{
    await sequelize.sync();
})
module.exports = {
    sequelize,
    Sequelize
};