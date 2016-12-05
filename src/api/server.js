//实现一个api请求代理
//参数 例 http://localhost:3000/GET?host=news-at.zhihu.com&url=/api/4/start-image/1080*1776

var http= require('http')
var url = require('url');
var qs = require('querystring');
var port = 3003;
console.log('Listening at http://localhost:' + port + '\n')

var type=['GET','POST'];
http.createServer(function(req, response){
 response.writeHead(200, {'Content-type' : 'application/json; charset=UTF-8','Access-Control-Allow-Origin':'*'});

 var pathname = url.parse(req.url).pathname.toUpperCase();
 var arg = url.parse(req.url).query;
 var str = qs.parse(arg);

if (!str.host || !str.url) {
  return;
}

 var opt = {
  host: str.host,
  port: '80',
  method:pathname.substring(1),
  path: str.url,
  headers:{
      "Host": "news-at.zhihu.com",
			"User-Agent"	:"Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/35.0.1916.157 Safari/537.36",
			"Accept"		:"*/*",
			"Referer"		:"http://news-at.zhihu.com/",
			"Content-Type"	:"application/x-www-form-urlencoded",
			"Connection"	:"close"
  }
}

var req = http.request(opt, function(res) {
  res.setEncoding('utf8');
  var body=''
  res.on('data',function(d){
    body += d
  }).on('end', function(){
    console.log(opt)
    console.log(res.headers)
  console.log(body)
  console.log('------------------------------')

  body.replace(/http\w{0,1}:\/\/pic/g, "https://images.weserv.nl/?url=pic")
  response.write(body)
  response.end()
});

}).on('error', function(e) {
  console.log("Got error: " + e.message);
})
req.end();

}).listen(port);
