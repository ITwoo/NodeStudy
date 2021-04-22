const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cookieParser = require('cookie-parser')

const app = express();

app.set('port', process.env.PORT || 3000);

/*
    모든 라우터에서 공통적으로 실행 
    특정경로만 실행되게 지정해줄 수도 있다.
*/
app.use((req, res, next) =>{
    console.log("모든 요청에 실행하고싶어요");
    next();
});

app.use(morgan('combined'));

//app.use('요청 경로' , express.static('실제경로'));
//static 실행시 내부적으로 next를 실행하지 않는다.
// app.use('/', express.static(__dirname, 'public'));

app.use(cookieParser('zerochopassword'));
app.use(express.json);
app.use(express.urlencoded({ extended : true }));

/*
app.get('/cookie', (req, res) => {
    req.cookies // { mycookie: 'test' } 
    req.signedCookies;
    res.cookie('name' , encodeURIComponent(name), {
        httponly : true,
        path : '/cookie',
    })
    res.clearCookie('name' , encodeURIComponent(name), {
        httpOnly : true,
        path: '/',
    })
});
*/

/*
   메서드와 주소가 있는 '라우터'들 
*/

// 웹서버 작성
app.get('/', (req, res) => {
  //  res.send('hello express');
  res.sendFile(path.join(__dirname, './index.html'));
});

app.post('/', (req, res) => {
    res.send('hello express');
  
});

app.get('/about', (req, res) => {
    res.send('hello express');
});

app.get('/category/:name', (req, res) => {
    res.send(`hello ${req.params.name}`);
});

// api 서버 작성

app.get('/json', (req, res) => {
/*
    //http로 코딩시
    res.writeHead(200, { 'Content-Type' : 'zerocho' });
    res.end(JSon.stringify({ hello : 'zerocho' }));
*/
// express로 코딩시
    res.json({ hello : 'zerocho' });
});

app.use((req,res,next) => {
    res.status(200).send('404 에러 ');
});

app.use((err, req, res, next) => {
    console.error(err);
    res.send('에러났습니다.');
});
/*
    미들웨어에 여러번 센드하지 말것 : 오류발생
*/
app.listen(app.get('port'), () => {
    console.log('익스프레스 서버 실행')
})
/*
 app.listen(3000, () => {
    console.log('익스프레스 서버 실행')
})
*/