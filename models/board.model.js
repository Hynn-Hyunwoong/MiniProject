module.exports = (sequelize, Sequelize) => {
  class Board extends Sequelize.Model {
    static initialize() {
      return this.init(
        {
          idx: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
          },
          writer: {
            type: Sequelize.STRING(50),
            allowNull: true,
            references: {
              model: "User",
              key: "userId",
            },
            onUpdate: "cascade",
            onDelete: "set null",
          },
          subject: {
            type: Sequelize.STRING(150),
            allowNull: false,
          },
          content: {
            type: Sequelize.TEXT,
            allowNull: false,
          },
        },
        {
          sequelize,
        }
      );
    }
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: "writer" });
    }
  }
  Board.initialize();
  return Board;
};
