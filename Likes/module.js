const {sequelize} = require('../models');
const repository = require('./repository');
// const service = require('./service');
// const controller = require('./controller');

const repo = new repository({sequelize});

repo.likeItem({likeName:'ab',boardIdx:0}).then((data)=>console.log(data))