const db = require('../../data/dbConfig')
const { getProjectsById } = require('../project/model')

module.exports = {
    getTasks,
    getTaskById,
    insertTask,
}

async function getTasks(){
    const tasks = await db('tasks')
    return tasks
}

async function getTaskById(id){
    const task = await db('tasks').where({tasks_id: id}).first()
    task.task_completed?
    task.task_completed = true:
    task.task_completed = false
    return task
}

async function insertTask(task){
    task.task_completed?
    task.task_completed = 1:
    task.task_completed = 0
    const newTaskId = await db('tasks').insert(task)
    const res = getTaskById(newTaskId)
    return res
}
