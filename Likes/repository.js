class repository {
    constructor({sequelize}){
        this.likeIt = sequelize.models.likeIt
    }

    async likeItem({likeName, boardIdx}){
        const existingRecord = await this.likeIt.findOne({
            where: {
                likeName,
                boardIdx
            }
        });
        if(existingRecord){
            throw new Error('Validation Error: The like already exists')
        }
        const likeIt = await this.likeIt.create({likeName, boardIdx})
        return likeIt
    }
}

module.exports = repository;