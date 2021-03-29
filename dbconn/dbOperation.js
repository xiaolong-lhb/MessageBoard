
const mysql=require('mysql');

function sqlQuery(sql,callback){
  var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'MessageBoard'
  });
    connection.connect();
  
    
    connection.query(sql,function(err,data){
            if(err) throw err;
           callback(data);
    })
    connection.end();
}


function sqlInsert(sql,sqlarr,callback){
  var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'MessageBoard'
  });
    connection.connect();
  
    
    connection.query(sql,sqlarr,function(err,data){
            if(err) throw err;
           callback(data);
    })
    connection.end();
}

module.exports={
  sqlQuery,
  sqlInsert
};
  