class Service {
    constructor({ repo }){
        this.repo = repo;
    }
    async list() {
        try{
            const result = await this.repo.findAll();
            return result;
        } catch(e){
            throw new Error(e);
        }
    }
    
    async one ({idx, boardIdx}){
        try{
            const result = await this.repo.findOne({idx,boardIdx})
            return result;
        }catch(e){  
            throw new Error(e);
        }
    }

    async postCmt({boardIdx, commenter, content}){
        try{
            const result = await this.repo.postC({boardIdx, commenter, content});
            return result;
        }catch(e){
            throw new Error(e);
        }
    }

    async putCmt({ idx,boardIdx, content }){
        try{
            const result = await this.repo.putC({boardIdx,content,idx})
            return result;
        } catch(e){
            throw new Error(e);
        }
    }

    async delCmt({idx}){
        try{
            const result = await this.repo.delC({idx});
            return result;
        }catch(e){

        }
    }
}

module.exports = Service;