<<<<<<< HEAD
const express = require('express');
const router = express.Router();
const postRouter = require('./post');
const commentRouter = require('./comment');
const userRouter = require('./user');
const validationRouter = require('./validaton');

router.get('/', (req, res) => {
  res.send('인덱스 페이지');
});

router.use('/post', postRouter);
router.use('/comment', commentRouter);
router.use('/user', userRouter);
router.use('/validation', validationRouter);

module.exports = router;
=======
const express = require('express')
const router = express.Router();
const postRouter = require('./post')
const commentRouter = require('./comment')
const userRouter = require('./user')
const validationRouter = require('./validaton')


router.get('/', (req, res)=> {
    res.send('인덱스 페이지')
})

router.use('/post', postRouter)
router.use('/comment', commentRouter)
router.use('/user', userRouter)
router.use('/validation', validationRouter)

module.exports = router;
>>>>>>> 328d440593b4ce04834bcd2616265ef0de68d334
