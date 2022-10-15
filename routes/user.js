<<<<<<< HEAD
const express = require('express');
const router = express.Router();
const userFunc = require('../middlewares/userMiddleware');

router.get('/', userFunc.users, (req, res) => {
  console.log('미들웨어 다녀왔습니다.');
  res.send('finish');
});

module.exports = router;
=======
const express = require('express')
const router = express.Router();
const userFunc = require('../middlewares/userMiddleware')


router.get('/', userFunc.users, (req, res) => {
    console.log('미들웨어 다녀왔습니다.');
    res.send('finish');
});



module.exports = router;
>>>>>>> 328d440593b4ce04834bcd2616265ef0de68d334
