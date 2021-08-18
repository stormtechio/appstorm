'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/user-controller');

router.get('/', controller.get);
router.post('/', controller.post);
router.put('/', controller.put);
router.delete('/:id', controller.delete);

//autenticação
router.post('/login', controller.postLogin);
router.get('/login', controller.getLogin);

module.exports = router;