var http=require('http');
var cheerio=require('cheerio');
var url='http://xn--29sr7wl7n.com/';

function filterAtricle(html){
	var $=cheerio.load(html);
	var Atricles=$('.article');

	var AllAtricles=[];
	Atricles.each(function(item){
		var Atricle=$(this);
		var AtricleTitle=Atricle.find('h2').text();
		var AtricleData=Atricle.find('.well').text();
		var EachAtricle={
			AtricleData:AtricleData,
			AtricleTitle:AtricleTitle
		}
		AllAtricles.push(EachAtricle);
	})

	return AllAtricles;

}
function printAtricle(AllAtricles){
	AllAtricles.forEach(function(item){
		var AtricleData=item.AtricleData;
		var AtricleTitle=item.AtricleTitle;
		console.log(AtricleData+' '+AtricleTitle);

	})
	
}
http.get(url,function(res){
	var html='';
	res.on('data',function(data){
		html+=data;
	})
	res.on('end',function(){
      var AllAtricles=filterAtricle(html);
      printAtricle(AllAtricles);



	})
}).on('error',function(){
	console.log('获取数据出错！');
})