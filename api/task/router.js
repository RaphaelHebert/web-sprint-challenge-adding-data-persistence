const express = require('express')

const router = express.Router()
const { getTasks, insertTask } = require('./model')


router.get('/', async (req, res, next) => {
    try{
        const result = await getTasks()
        res.status(200).json(result)
    } catch (err) {
        next(err)
    }
})

router.post('/', async (req, res, next) => {
    try{
        const result = await insertTask(req.body)
        res.status(200).json(result)
    } catch (err) {
        next(err)
    }
})

module.exports = router