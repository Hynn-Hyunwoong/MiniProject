class Service {
  constructor({ repo }) {
    this.repo = repo;
  }

  async list() {
    try {
      const result = await this.repo.findAll();
      return result;
    } catch (e) {
      throw new Error(e);
    }
  }

  async one({ idx }) {
    try {
      const result = await this.repo.findOne({ idx });
      return result;
    } catch (e) {
      throw new Error(e);
    }
  }

  async postWrite({ subject, content, writer }) {
    try {
      const result = await this.repo.create({ subject, content, writer });
      return result;
    } catch (e) {
      throw new Error(e);
    }
  }

  async putModify({ idx, subject, content }) {
    try {
      const result = await this.repo.update({ idx, subject, content });
      return result;
    } catch (e) {
      throw new Error(e);
    }
  }

  async delBoard({ idx }) {
    try {
      const result = await this.repo.deleteBoard({ idx });
      return result;
    } catch (e) {
      throw new Error(e);
    }
  }
}

module.exports = Service;
