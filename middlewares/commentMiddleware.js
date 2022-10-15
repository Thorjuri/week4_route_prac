const commentFunc = (req, res, next) => {
<<<<<<< HEAD
  const { commentId } = req.params;
  console.log(`코멘트 미들웨어 도착! commentId : ${Number(commentId)}`);
  console.log(`    ${Number(commentId) + 1}
    ${Number(commentId) + 2}
    ${Number(commentId) + 3}
    ${Number(commentId) + 4}`);
  next();
};
=======
    const {commentId} = req.params;
    console.log(`코멘트 미들웨어 도착! commentId : ${Number(commentId)}`);
    console.log(`    ${Number(commentId)+1}
    ${Number(commentId)+2}
    ${Number(commentId)+3}
    ${Number(commentId)+4}`);
    next();
}
>>>>>>> 328d440593b4ce04834bcd2616265ef0de68d334

// module.exports = (req, res, next) => {
//     const {commentId} = req.params;
//     console.log(`코멘트 미들웨어 도착:  ${Number(commentId)} 전송`);
//     res.send({result: "success"});
//     next();
// }

<<<<<<< HEAD
module.exports = commentFunc;
=======
module.exports = commentFunc;
>>>>>>> 328d440593b4ce04834bcd2616265ef0de68d334
