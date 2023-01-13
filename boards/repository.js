class Repository {
  constructor({ sequelize }) {
    this.board = sequelize.models.Board;
  }

  async findAll() {
    try {
      const bList = await this.board.findAll({ raw: true });
      return bList;
    } catch (e) {
      throw new Error(e);
    }
  }

  async findOne({ idx }) {
    try {
      const bOne = await this.board.findOne({ where: { idx } });
      return bOne;
    } catch (e) {
      throw new Error(e);
    }
  }

  async create({ subject, content, writer }) {
    try {
      const bPost = await this.board.create({ subject, content, writer });
      return bPost;
    } catch (e) {
      throw new Error(e);
    }
  }

  async update({ idx, subject, content }) {
    try {
      const bPut = await this.board.update({ subject, content }, { where: { idx } });
      return bPut;
    } catch (e) {
      throw new Error(e);
    }
  }

  async deleteBoard({ idx }) {
    try {
      const deleteBoard = await this.board.destroy({ where: { idx } });
      return deleteBoard;
    } catch (e) {
      throw new Error(e);
    }
  }
}

module.exports = Repository;
