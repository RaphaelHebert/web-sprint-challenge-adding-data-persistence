const db = require('../../data/dbConfig')

module.exports = {
    getProjects,
    postProjects
}

async function getProjectsById(id){
    const project = await db('projects').where({project_id : id}).first()
    project.project_completed?
    project.project_completed = true:
    project.project_completed = false
    return project
}

async function getProjects(){
    const projects = await db('projects')
    projects.map(project => {
        project.project_completed === 0? 
        project.project_completed = false:
        project.project_completed = true
    })
    return projects
}

async function postProjects(project){
    project.project_completed? 
    project.project_completed = 1:
    project.project_completed = 0
    const newProjectId = await db('projects').insert(project)
    const newProject = await getProjectsById(newProjectId)
    return newProject
}

