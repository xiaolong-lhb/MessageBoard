//加载登录界面
app.get('/',function(req,res){
    //调用渲染模板
    res.render('Login',{
        //传参
        title:'登录界面', content:'Render template'
    });
 
});

//加载注册界面
app.get('/register',function(req,res){
    //调用渲染模板
    res.render('register',{
        title:'注册界面', content:'Render template'
    });
 
});

//
//app.use(defend);
//加载主留言界面
app.get('/MsgMain',function(req,res){
    //调用渲染模板
    console.log(req.session.username);
    res.render('MsgMain',{
        title:'主留言界面', content:'Render template'
    });
 
});


app.use('/users',routes);

//错误处理
app.use((req,res,next)=>{
    res.status(404).send('404');
})