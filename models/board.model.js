module.exports = (sequelize,Sequelize) => {
    const User = require('./user.model')(sequelize, Sequelize);
    class Board extends Sequelize.Model {
        static initialize(){
            return this.init({
                BoardIdx : {
                    type: Sequelize.INTEGER,
                    autoIncrement: true,
                    primaryKey: true,
                },
                userId: {
                    type:Sequelize.STRING(64),
                    allowNull : false,
                    references : {
                        model : 'User',
                        key : 'userId'
                    },
                    onUpdate : 'cascade',
                    onDelete : 'cascade'
                },
                title:{
                    type: Sequelize.STRING(50),
                    allowNull: false,
                },
                content : {
                    type: Sequelize.STRING(9999),
                    allowNull: false,
                }
            },{
                sequelize
            })
        }
    } 
    Board.initialize();
    Board.belongsTo(User, { foreignKey: 'userId' });
    return Board;
}