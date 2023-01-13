class Control {
    constructor({serv}){
        this.service = serv;
    }

    async getList(req,res,next){
        try{const getList = await this.service.list();
        res.json(getList);
    }catch(e){
        next(e);
    };
    }
    
    async getOne(req,res,next){
        try{
            const { idx } = req.body;
            const {boardIdx} = req.params;
            const getOne = await this.service.one({idx, boardIdx})
            return res.json(getOne);
        }catch(e){
            next(e);
        }
    }

    async postComment(req,res,next){
        try{
            const { boardIdx } = req.params;
            console.log(req.params)
            const { commenter, content} = req.body;
            console.log(req.body)
            const postComt = await this.service.postCmt({boardIdx, commenter, content})
            res.json(postComt)
        }catch(e){
            next(e);
        }
    }
    async putCmt(req,res,next){
        try{
            const {idx} = req.params;
            const {boardIdx, content} = req.body;
            const putComt = await this.service.putCmt({boardIdx, content,idx })
            res.json(putComt);
        }catch(e){
            next(e)
        }
    }
    
    async DeleteCmt(req,res,next){
        try{
            const {idx} = req.params;
            const deleteComt = await this.service.delCmt({idx})
            res.json(deleteComt);
        }catch(e){
            next(e)
        }
    }
}

module.exports = Control;