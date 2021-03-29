

//通过文件后缀名来获取相应的文件类型
function getMime(pathMine){
    switch(pathMine){
        case '.html':
            return 'text/html';
        case '.js':
            return 'text/javascript';
        case '.css':
            return 'text/css';
        default:
            return 'text/html';
    }
}

//读取html文件的方法
function static(req,res,path){
  const express=require('express');

  const swig=require('swig');
  
  const app=express();
  
  path=path=='/'?'login':path;
  app.set('views','./Static');
  //设置html模板渲染引擎
  app.engine('html',swig.renderFile);
  //设置渲染引擎为html
  app.set('view engine','html');
  
  //加载登录界面
  app.get('/'+path,function(req,res){
      //调用渲染模板
      res.render(path,{});
   
  });
}


// var app={
//   static:(req,res,staticPath)=>{
//  //定义获取的路径
//  var pathname=url.parse(req.url).pathname;
//  pathname=pathname=='/'?'/Login.html':pathname; 
// //利用path获取路径后缀名
//  var extname=path.extname(pathname);
//  //通过fs获取文件
//  if(pathname!='/favicon.ico'){
//    try {
//      var data=fs.readFileSync('./'+staticPath);
//        if(data){
//          //定义变量接受调用来自common的返回文件类型的值
//          var mime=getMime(extname);
//          res.writeHead(200, {'Content-Type': ''+mime+';charset="utf-8"'});
//          res.end(data);
//          //如果执行成功返回ture,表示不用再执行JsLogin端的if else代码
//          //return true;
//        }
//    } catch (error) {
     
//    }
   
//  }
//   }
// }
module.exports=static;