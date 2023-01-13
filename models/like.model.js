module.exports = (sequelize, Sequelize) => {
  class LikeIt extends Sequelize.Model {
    static initialize() {
      return this.init(
        {
          boardIdx: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
              model: "Board",
              key: "idx",
            },
            onUpdate: "cascade",
            onDelete: "cascade",
          },
          likeName: {
            type: Sequelize.STRING(32),
            allowNull: true,
            references: {
              model: "User",
              key: "userId",
            },
            onUpdate: "cascade",
            onDelete: "set null",
          },
        },
        {
          sequelize,
        }
      );
    }
    static associate(models) {
      this.belongsTo(models.User, {
        foreignKey: "likeName",
      });
      this.belongsTo(models.Board, {
        foreignKey: "boardIdx",
      });
    }
  }
  LikeIt.initialize();
  return LikeIt;
};
