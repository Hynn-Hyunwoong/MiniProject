class Control {
  constructor({ serv }) {
    this.service = serv;
  }

  async getList(req, res, next) {
    try {
      const getList = await this.service.list();
      res.json(getList);
    } catch (e) {
      next(e);
    }
  }

  async getOne(req, res, next) {
    try {
      const { idx } = req.params;
      const getOne = await this.service.one({ idx });
      res.json(getOne);
    } catch (e) {
      next(e);
    }
  }

  async postBoard(req, res, next) {
    try {
      const { subject, content, writer } = req.body;
      const postBoard = await this.service.postWrite({ subject, content, writer });
      res.json(postBoard);
    } catch (e) {
      next(e);
    }
  }

  async putBoard(req, res, next) {
    try {
      const { idx } = req.params;
      const { subject, content } = req.body;
      const putBoard = await this.service.putModify({ idx, subject, content });
      res.json(putBoard);
    } catch (e) {
      next(e);
    }
  }

  async deleteBoard(req, res, next) {
    try {
      const { idx } = req.params;
      const deleteBoard = await this.service.delBoard({ idx });
      res.json(deleteBoard);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = Control;
