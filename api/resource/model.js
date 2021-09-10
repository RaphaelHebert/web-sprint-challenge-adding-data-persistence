const db = require('../../data/dbConfig')

module.exports = {
    getResourceById,
    getResource,
    insertNewResource
}

async function getResource(){
    const result = await db('resources')
    return result
} 

async function getResourceById(id){
    const result = await db('resources').where({resource_id: id}).first()
    return result
}


async function insertNewResource(resource){
    const newResourcetId = await db('resources').insert(resource)
    const res = getResourceById(newResourcetId)
    return res
}
