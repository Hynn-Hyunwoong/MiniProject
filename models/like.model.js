module.exports = (sequelize, Sequelize) => {
    const Board = require('./board.model')(sequelize, Sequelize);
    const User = require('./user.model')(sequelize, Sequelize);
    class Like extends Sequelize.Model{
        static initialize(){
            return this.init({
                BoardIdx :{
                    type:Sequelize.INTEGER,
                    allowNull: false,
                    references : {
                        model : 'Board',
                        key : 'BoardIdx'
                    },
                    onUpdate : 'cascade',
                    onDelete : 'cascade'
                },
                userId:{
                    type:Sequelize.STRING(32),
                    allowNull: false,
                    references : {
                        model : 'User',
                        key : 'userId'
                    },
                    onUpdate : 'cascade',
                    onDelete : 'cascade'
                }
            },
            {
                sequelize
            })
        }
    }
    Like.initialize()
    Like.belongsTo(User, { foreignKey: 'userId' });
    Like.belongsTo(Board, { foreignKey: 'BoardIdx' });
    return Like
}