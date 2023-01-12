module.exports = (sequelize, Sequelize) => {
    class Comment extends Sequelize.Model{
        static initialize(){
            return this.init({
                CommentIdx :{
                    type: Sequelize.INTEGER,
                    autoIncrement: true,
                    primaryKey: true,
                },
                BoardIdx :{
                    type:Sequelize.STRING(30),
                    allowNull: false,
                },
                userId:{
                    type:Sequelize.STRING(30),
                    allowNull: false,
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
    return Comment
}