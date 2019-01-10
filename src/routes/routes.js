const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');

// GET - request
router.get('/', userController.home);
router.get('/signup', userController.getSignup);
router.get('/login', userController.getLogin);
router.get('/profile', userController.getProfile);
router.get('/logout', userController.getLogout);



// POST - request
router.post('/signup', userController.postSignup);
router.post('/login', userController.postLogin);

router.get('*', userController.get404);

module.exports = router;