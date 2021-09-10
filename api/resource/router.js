const express = require('express')

const router = express.Router()
const { getResourceById, getResource, insertNewResource } = require('./model')


router.get('/', async (req, res, next) => {
    try{
        const result = await getResource()
        res.status(200).json(result)
    } catch (err) {
        next(err)
    }
})

router.get('/:id', async (req, res, next) => {
    try{
        const result = await getResourceById(req.params.id)
        res.status(200).json(result)
    } catch (err) {
        next(err)
    }
})

router.post('/', async (req, res, next) => {
    try{
        const result = await insertNewResource(req.body)
        res.status(201).json(result)
    } catch (err) {
        next(err)
    }
})

module.exports = router