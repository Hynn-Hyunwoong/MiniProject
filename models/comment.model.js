module.exports = (sequelize, Sequelize) => {
  class Comment extends Sequelize.Model {
    static initialize() {
      return this.init(
        {
          idx: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
          },
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
          commenter: {
            type: Sequelize.STRING(30),
            allowNull: true,
            references: {
              model: "User",
              key: "userId",
            },
            onUpdate: "cascade",
            onDelete: "set null",
          },
          content: {
            type: Sequelize.STRING(30),
            allowNull: false,
          },
        },
        {
          sequelize,
        }
      );
    }
    static associate(models) {
      this.belongsTo(models.User, {
        foreignKey: "commenter",
      });
      this.belongsTo(models.Board, {
        foreignKey: "boardIdx",
      });
    }
  }

  Comment.initialize();
  return Comment;
};
