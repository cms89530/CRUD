var MongoClient = require('mongodb').MongoClient;
var DBurl = 'mongodb://localhost:27017/school';
MongoClient.connect(DBurl,function(err,client){
    if(err){
        console.log(err);
        console.log('fail');
        return;
    }

    console.log('KKK');
    var db_client = client.db('school')
    var db_table = db_client.collection('test')
    console.log('KKK');

    db_table.find({}).toArray(function(err, result){
        if(err) throw err;
        console.log(result)
        client.close;
    });

})