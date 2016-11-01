var http=require('http');
var cheerio=require('cheerio');
var url='http://www.imooc.com/learn/61';
//cheerio可以理解成一个 Node.js 版的 jquery

function filterChapters(html){
console.log(html);
}
http.get(url,function(res){
	var html='';

	res.on('data',function(data){
		html+=data;
	})
	res.on('end',function(){
		filterChapters(html);
	})
}).on('error',function(){
	console.log('获取课程数据出错！');
})