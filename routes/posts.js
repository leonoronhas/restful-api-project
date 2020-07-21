const express = require('express');
const router = express.Router();

const Post = require('../models/Post');

router.get('/', (request, response) => {
    response.send('We are on posts');
});

router.post('/', (request, response) => {

});

module.exports = router;