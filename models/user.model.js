module.exports = (sequelize, Sequelize) => {
  class User extends Sequelize.Model {
    static initialize() {
      return this.init(
        {
          userId: {
            type: Sequelize.STRING(50),
            allowNull: false,
            primaryKey: true,
          },
        },
        {
          sequelize,
        }
      );
    }
  }
  User.initialize();
  return User;
};
