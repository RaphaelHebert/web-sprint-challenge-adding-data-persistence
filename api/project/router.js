const express = require('express')
const { getProjects, postProjects } = require('./model')

const router = express.Router()

router.get('/', async (req, res, next) => {
    try{
        const result = await getProjects()
        res.status(200).json(result)
    } catch (err) {
        next(err)
    }
})


router.post('/', async (req, res, next) => {
    try{
        const result = await postProjects(req.body)
        res.status(200).json(result)
    } catch (err) {
        next(err)
    }
})

module.exports = router
