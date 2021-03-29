const express=require('express');

const swig=require('swig');

const session=require('express-session');


const app=express();

const bodyParser=require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))
 
app.use(bodyParser.json())

app.set('views','./Static');
//设置html模板渲染引擎
app.engine('html',swig.renderFile);
//设置渲染引擎为html
app.set('view engine','html');


const routes=require('./routes/users');

const index=require('./routes/index');

//配置session

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
  }))


app.use(routes);

app.listen(3002,(req,res)=>{
    console.log("server success localhost:3002");
});


//错误处理
app.use((req,res,next)=>{
    res.status(404).send('404');
})