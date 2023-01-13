const {sequelize} = require('../models');
const repository = require('./repository');
const service = require('./service');
const controller = require('./controller');

const repo = new repository({sequelize});
const serv = new service({repo});
const control = new controller({serv});


module.exports = control

// repo.putC({idx:"1"}).then((data)=> console.log(data));
// serv.putCmt({idx:"1"}).then((data)=>console.log(data));