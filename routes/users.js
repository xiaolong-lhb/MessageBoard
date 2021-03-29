const express=require('express');

const router=express.Router();

const mysql=require('mysql');

const db=require('../dbconn/dbOperation');


//加载登录界面
router.get('/',function(req,res){
    //调用渲染模板
    res.render('Login',{
        //传参
        title:'登录界面', content:'Render template'
    });
 
});

//加载注册界面
router.get('/register',function(req,res){
    //调用渲染模板
    res.render('register',{
        title:'注册界面', content:'Render template'
    });
 
});

//加载主页面
router.get('/MsgMain',function(req,res){
    //调用渲染模板
    if(req.session.islogin){
        res.render('MsgMain',{
            title:'主界面', content:'Render template'
        });
    }
    else{
        res.send('请登录后访问!');
        return res.redirect('/');
    }
 
});


//加载留言界面
router.get('/MsgList',function(req,res){
    //调用渲染模板
    if(req.session.username){
        res.render('MsgList',{
            title:'留言界面', content:'Render template'
        });
    }
    else{
        res.send('请登录后访问！');
        return res.redirect('/');
    }
});

//加载输入留言界面
router.get('/enterMsg',function(req,res){
    //调用渲染模板
    if(req.session.islogin){
        res.render('enterMsg',{
            title:'输入留言界面', content:'Render template'
        });
    }
    else{
        res.send('请登录后访问!');
    }
});


//执行登录操作
router.post('/doLogin',(req,res)=>{
    var user=req.body;
    db.sqlQuery("select * from t_user where username='"+user.username+"'",(data)=>{
        if(data.length==0||data[0].password!=user.psw){
            var resobj=[{
                "status":false,
                "msg":'用户名或密码错误'
            }];
            res.send(resobj);
        }
        else{
            var resobj=[{
                "status":true,
                "msg":'登录成功'
            }];
            req.session.username=user.username;
            req.session.islogin=true;
            res.send(resobj);
        }
    })
})



//执行注册操作
router.post('/doRegister',(req,res)=>{
    var user=req.body;
    db.sqlQuery("select * from t_user where username='"+user.username+"'",(data)=>{
        if(data.length==0){
            var sql="insert into t_user value(?,?,?)";
                db.sqlInsert(sql,[user.username,user.psw,user.nickname],()=>{
                     var resobj=[{
                        "status":true,
                        "msg":'注册成功，返回登录界面',
                    }]
                     res.send(resobj);
                    })
                }
                else{
                    var resobj=[{
                        "status":false,
                        "msg":'该账号已存在，请重新注册！'
                    }];
                    res.send(resobj);
                }
        })

    
})


//执行保存用户留言操作

router.post('/enterMsg',(req,res)=>{
    var msg=req.body;
    var date=new Date();
    var second=date.getSeconds();
    var minute=date.getMinutes();
    var hour=date.getHours();
    second=second<10?'0'+second:second;
    minute=minute<10?'0'+minute:minute;
    hour=hour<10?'0'+hour:hour;
    var createtime=date.getFullYear()+"/"+(date.getMonth()+1)+"/"+date.getDate()+"   "+hour+":"+minute+":"+second;
    var sql="insert into t_message value(?,?,?,?)";
    db.sqlInsert(sql,[req.session.username,msg.title,createtime,msg.content],()=>{
        var resobj=[{
            "status":true,
            "msg":'留言成功，返回留言主界面',
        }]
        res.send(resobj);
    })
        
    })

//获取数据库留言操作
router.get('/doMsg',(req,res)=>{
    //数据库连接
        db.sqlQuery("select * from t_message",(data)=>{
        res.send(data);
        })
    
})

module.exports=router;