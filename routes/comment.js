<<<<<<< HEAD
const express = require('express');
const router = express.Router();
const commentFunc = require('../middlewares/commentMiddleware');

router.get('/', (req, res) => res.send('코멘트 페이지'));

router.get('/:commentId', commentFunc, (req, res) => {
  const { commentId } = req.params;
  console.log('next를 통해 기존 API로 돌아옴');
  console.log(`    ${Number(commentId) + 5}
    ${Number(commentId) + 6}
    ${Number(commentId) + 7}`);
  res.json({ result: 'finish' });
});

module.exports = router;
=======
const express = require('express')
const router = express.Router();
const commentFunc = require('../middlewares/commentMiddleware')


router.get('/', (req, res) => res.send('코멘트 페이지'))

router.get('/:commentId', commentFunc, (req, res) => {
    const {commentId} = req.params;
    console.log('next를 통해 기존 API로 돌아옴')
    console.log(`    ${Number(commentId)+5}
    ${Number(commentId)+6}
    ${Number(commentId)+7}`)
    res.json({result: "finish"})
})


module.exports = router;
>>>>>>> 328d440593b4ce04834bcd2616265ef0de68d334
