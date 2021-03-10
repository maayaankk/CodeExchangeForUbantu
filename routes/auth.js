const express = require('express');
const router = express.Router()

const { signup, signin, signout, requireSignin } = require('../controllers/auth');
const { userSignUpValidatory } = require('../validator/index');

router.post('/signup', userSignUpValidatory, signup);
router.post('/signin', signin);
router.get('/signout', signout);


router.get('/hello', requireSignin, (req, res) => {
    res.send("Hello there");
});

module.exports = router;