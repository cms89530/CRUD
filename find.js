var MongoClient = require('mongodb').MongoClient;
var DBurkl = 'mongodb://localhost:27017/test';
MongoClient.connect(DBurkl,function(err,db){
    if(err){
        console.log(err);
        console.log('error');
        return;
    }
    var list=[];
    var result=db.collection('NAME').find({});
    result.each(function(error,doc){
        if(error){
            console.log(error);
        }else{
            if(doc!=null){
                list.push(doc);
            }else{
                for(var i=0;i<list.length;i++){
                    console.log(list[i],NAME);
                    console.log(list[i],CellphoneNumber)
                }
            }
        }
    });
    result.toArray(function(err,data){
        console.log(data);
    });
    db.close();
})