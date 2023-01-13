const { sequelize } = require("../models");
const repository = require("./repository");
const service = require("./service");
const controller = require("./controller");

const repo = new repository({ sequelize });
const serv = new service({ repo });
const control = new controller({ serv });

// repo.findAll().then((data) => console.log(data));
// serv.list().then((data) => console.log(data));
// control.getList().then((data) => console.log(data));

module.exports = control;
