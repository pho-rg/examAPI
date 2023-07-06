const express = require('express');

const etudiantController = require('../controllers/etudiantRoutes');

const router = express.Router();

// GET

router.get('/posts', etudiantController.getPosts);

// POST
router.post('/post', etudiantController.createPost);

module.exports = router;