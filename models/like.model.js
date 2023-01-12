module.exports = (sequelize, Sequelize) => {
    class Like extends Sequelize.Model{
        static initialize(){
            return this.init({
                BoardIdx :{
                    type:Sequelize.STRING(32),
                    allowNull: false,
                },
                userId:{
                    type:Sequelize.STRING(32),
                    allowNull: false,
                }
            },
            {
                sequelize
            })
        }
    }

    Like.initialize()
    return Like
}