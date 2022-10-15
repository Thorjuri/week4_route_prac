const userFunc = {
<<<<<<< HEAD
  users: (req, res, next) => {
    console.log('userMiddleware 들렸다 감!!');
    next();
  },
};
=======
    users: (req, res, next) => {
    console.log('userMiddleware 들렸다 감!!')
    next();
    }
}
>>>>>>> 328d440593b4ce04834bcd2616265ef0de68d334

// module.exports = (req, res, next) => {
//     const {commentId} = req.params;
//     console.log(`코멘트 미들웨어 도착:  ${Number(commentId)} 전송`);
//     res.send({result: "success"});
//     next();
// }

<<<<<<< HEAD
module.exports = userFunc;
=======
module.exports = userFunc;
>>>>>>> 328d440593b4ce04834bcd2616265ef0de68d334
