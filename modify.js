var MongoClient = require('mongodb').MongoClient;
var DBurl = 'mongodb://localhost:27017/test';
MongoClient.connect(DBurl,function(err,db0){
    if(err){
        console.log(err);
        console.log('fail');
        return;
    }
    db.collection('test').updataOne({"name":"shen"},{$set:{"age":20}},function(error,data){
        if(error){
            console.log('fail');
            return;
        }
        console.log("success");
        db.close();
    })
})