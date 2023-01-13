class Repository {
    constructor({sequelize}){
        this.Comment = sequelize.models.Comment;
    }

    async findAll(){
        try{const cList = await this.Comment.findAll({ raw : true });
        return cList 
    }catch(e){
        throw new Error(e);
    }
    }
    async findOne({ idx, boardIdx }){
        try{
            const cOne = await this.Comment.findOne({raw:true, where : {idx, boardIdx} });
            return cOne
        }catch(e){
            throw new Error(e);
        }
    }
    
    async postC({ boardIdx, commenter, content}){
        try{
            const result = await this.Comment.create({boardIdx, commenter, content});
            return result
        }catch(e){
            throw new Error(e)
        }
    }

    async putC({ idx,boardIdx, content}){
        try{
            const cPut = await this.Comment.update({boardIdx, content}, {where : { idx }});
            return cPut;
        }catch(e){
            throw new Error(e);
        }
    }
    async delC({ idx }){
        try{
            const cDel = await this.Comment.destroy({where : {idx}})
            return cDel;
        }catch(e){
            throw new Error(e);
        }
    }
}


module.exports = Repository;