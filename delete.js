var MongoClient = require('mongodb').MongoClient;
var DBurl = 'mongodb://loclahost:27017/test';
MongoClient.connect(DBurl,function(err,db){
    if(err){
        console.log(err);
        console.log('error');
        return;
    }
    db.collection('test').deleteOne({"name":"CMS"},function(error,data){
        if(error){
            console.log('fail');
            return;
        }
        console.log('success');
        db.close();
    })
})