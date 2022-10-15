const express = require('express');
const app = express();
const port = 3000;
const router = require('./routes/index');
const bodyParser = require('body-parser');

<<<<<<< HEAD
app.use('/', router);
app.use(express.static('public'));
//이제 앞으로 public 안의 파일들은 static으로 읽어준다.
//즉 html 및 css 파일들 넣어주면 됨
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
//앞으로 view engine 은 ejs로 실행시켜준다.


router.get('/test', (req, res) => {
  res.sendFile(__dirname + '/public/main.html');
});

//foam.html 에서 submit 하면 해당 경로로 연결
app.post('/email_post', (req, res) => {
  console.log(req.body.email);
  res.render('email.ejs', { 'email.ejs': req.body.email });
}); //views 폴더의 email.ejs 파일을 읽어와서 그려준다.

app.listen(port, () => {
  console.log(`${port}번 포트로 서버가 실행되었습니다.`);
});
=======

app.use('/', router);
app.use(express.static('public'));
//이제 앞으로 public 안의 파일들은 static으로 읽어준다.
 //즉 html 및 css 파일들 넣어주면 됨
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'ejs')
 //앞으로 view engine 은 ejs로 실행시켜준다.

router.get('/test', (req, res)=> {
    res.sendFile(__dirname + "/public/main.html");
});

//foam.html 에서 submit 하면 해당 경로로 연결
app.post('/email_post', (req,res)=> {
    console.log(req.body.email);
    res.render('email.ejs', {'email.ejs' : req.body.email})
});   //views 폴더의 email.ejs 파일을 읽어와서 그려준다.









app.listen(port, ()=> {
    console.log(`${port}번 포트로 서버가 실행되었습니다.`);
});  
>>>>>>> 328d440593b4ce04834bcd2616265ef0de68d334
