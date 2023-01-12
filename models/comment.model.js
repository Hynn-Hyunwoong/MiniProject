module.exports = (sequelize, Sequelize) => {
    const Board = require('./board.model')(sequelize, Sequelize);
    const User = require('./user.model')(sequelize, Sequelize);
    class Comment extends Sequelize.Model{
        static initialize(){
            return this.init({
                CommentIdx :{
                    type: Sequelize.INTEGER,
                    autoIncrement: true,
                    primaryKey: true,
                },
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
                    type:Sequelize.STRING(30),
                    allowNull: false,
                    references : {
                        model : 'User',
                        key : 'userId'
                    },
                    onUpdate : 'cascade',
                    onDelete : 'cascade'
                },
                content : {
                    type:Sequelize.STRING(30),
                    allowNull: false,
                }
            },
            {
                sequelize
            })
        }
    }

    Comment.initialize()
    Comment.belongsTo(User, { foreignKey: 'userId' });
    Comment.belongsTo(Board, { foreignKey: 'BoardIdx' });
    return Comment
}