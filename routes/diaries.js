const express = require('express')
const router = express.Router()
const { getDiaries, getDiary, createDiary, updateDiary, deleteDiary } = require('../controllers/diaries')

router.route('/').get(getDiaries).post(createDiary)
router.route('/:id').get(getDiary).put(updateDiary).delete(deleteDiary)