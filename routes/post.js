<<<<<<< HEAD
const express = require('express');
const router = express.Router();
const postFunc = require('../middlewares/postMiddelware');

router.get('/', (req, res) => res.send('포스트 페이지'));

router.get('/:postId', postFunc, (req, res) => {
  const { postId } = req.params;
  console.log(`미들웨어 다녀왔습니다. postId: ${postId}`);
  res.send('finish');
});

module.exports = router;
=======
const express = require('express')
const router = express.Router();
const postFunc = require('../middlewares/postMiddelware')

router.get('/', (req, res) => res.send('포스트 페이지'))

router.get('/:postId', postFunc, (req, res) => {
    const {postId} = req.params;
    console.log(`미들웨어 다녀왔습니다. postId: ${postId}`)
    res.send('finish')
})


module.exports = router;
>>>>>>> 328d440593b4ce04834bcd2616265ef0de68d334
