var http = require('http');

http.createServer(function (req, res){
        router(req,res);
}).listen(port);

function router(req,res) {
    var url = req.url;
    var dirs = url.split('/');
    var html = '';
    html = 'Not Found';
    console.log('Node.js web server get request '+url);

    switch(dirs.length) {
        case 0:
        case 1:
                reponse_html(res,html);
                break;
            default:
                var pro = dirs[1];
                if(pro==''){
                    callback_default(req,res);
                }else if(pro=='api'){
                    get_post(req,res,function(postData){
                        callback_api(req,res,postData);
                    });
                }else {
                    reponse_html(res,html);
                }
                break
    }
}