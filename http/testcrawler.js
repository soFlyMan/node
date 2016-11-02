var http=require('http');
var cheerio=require('cheerio');
var url='http://www.imooc.com/learn/61';
//cheerio可以理解成一个 Node.js 版的 jquery

function filterChapters(html){
var $=cheerio.load(html);
var charpters=$('.chapter');
// [{
// 	chapterTitle:'',
// 	video:[
// 	title:'',
// 	id:''
// 	]
// }]

var courserData=[];
charpters.each(function(item){
	var charpter=$(this);
	var charpterTitle=charpter.find('strong').text();
	var videos=charpter.find('.video').children('li');
	var charpterDate={
		charpterTitle:charpterTitle,
		videos:[]
	}
	videos.each(function(item){
		var video=$(this).find('.J-media-item');
		var videoTitle=video.text();
		var id=video.attr('href').split('video/')[1];

		charpterDate.videos.push({
			title:videoTitle,
			id:id
		})
	})
	console.log(charpterDate);
	courserData.push(charpterDate);

})
return courserData;
}

function printCourseInfo(courserData){
courserData.forEach(function(item){
	var charpterTitle=item.charpterTitle;
	console.log(charpterTitle);
	item.videos.forEach(function(video){
		console.log(' 【'+video.id+'】 '+video.title+'\n');
	})
})
}

http.get(url,function(res){
	var html='';

	res.on('data',function(data){
		html+=data;
	})
	res.on('end',function(){
		var courserData=filterChapters(html);
		printCourseInfo(courserData);
	})
}).on('error',function(){
	console.log('获取课程数据出错！');
})