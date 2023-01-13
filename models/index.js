const config = require("../config")["db"];
const Sequelize = require("sequelize");

const sequelize = new Sequelize(config.DBDb, config.DBUser, config.DBPw, config);

const User = require("./user.model")(sequelize, Sequelize);
const Board = require("./board.model")(sequelize, Sequelize);
const Comment = require("./comment.model")(sequelize, Sequelize);
const LikeIt = require("./like.model")(sequelize, Sequelize);

// console.log(User);
// console.log(Board);
// console.log(Comment);
// console.log(Like);

const { models } = sequelize;
Board.associate(models);
Comment.associate(models);
LikeIt.associate(models);

const test = async (sequelize) => {
  const {
    models: { User, Board, Comment },
  } = sequelize;
  await User.create({ userId: "ab" });
  await User.create({ userId: "cd" });
  await User.create({ userId: "ef" });

  await Board.create({ writer: "ab", subject: "1", content: "1.1" });
  await Board.create({ writer: "ab", subject: "2", content: "2.1" });
  await Board.create({ writer: "ab", subject: "3", content: "3.1" });
  await Board.create({ writer: "cd", subject: "4", content: "4.1" });
  await Board.create({ writer: "cd", subject: "5", content: "5.1" });
  await Board.create({ writer: "cd", subject: "6", content: "6.1" });

  await Comment.create({ boardIdx: "1", commenter: "ab", content: "content" });
  await Comment.create({ boardIdx: "2", commenter: "ab", content: "content" });
};

;(async () => {
  try {
    await sequelize.sync({ force: true });
    console.log("Sync successful");
    test(sequelize);
  } catch (error) {
    console.error(`Error while syncing: ${error}`);
  }
});

module.exports = {
  sequelize,
  Sequelize,
};
