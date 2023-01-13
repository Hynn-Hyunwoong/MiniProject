module.exports = (sequelize, Sequelize) => {
  class likeIt extends Sequelize.Model {
    static initialize() {
      return this.init(
        {
          boardIdx: {
            type: Sequelize.INTEGER,
            allowNull: true,
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
          idx: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
          }
        },
        {
          indexes: [
            {
              unique: true,
              fields: ['likeName', 'boardIdx']
            }
          ],
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
  likeIt.initialize();
  return likeIt;
};
