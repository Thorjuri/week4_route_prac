<<<<<<< HEAD
const postFunc = (req, res, next) => {
  const { postId } = req.params;
  console.log(`postMiddleware 들려서 postId: ${postId} 얻어감`);
  next();
};
=======

const postFunc = (req, res, next) => {
    const {postId} = req.params;
    console.log(`postMiddleware 들려서 postId: ${postId} 얻어감`)
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
module.exports = postFunc;
=======
module.exports = postFunc;
>>>>>>> 328d440593b4ce04834bcd2616265ef0de68d334
