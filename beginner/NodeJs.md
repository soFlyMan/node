# NodeJs

process
 
commonJs规范

###url
- url.parse('http://www.imooc.com/video/6710')

url.parse('http://www.imooc.com/video/6710',true)
把query解析成一个对象

quertstring
```
querystring.stringify({name:'soFly',course:['jade','node'],from:''})
//'name=soFly&course=jade&course=node&from='
querystring.stringify({name:'soFly',course:['jade','node'],from:''},',')
//'name=soFly,course=jade,course=node,from='
querystring.stringify({name:'soFly',course:['jade','node'],from:''},',',':')
//'name:soFly,course:jade,course:node,from:'


querystring.parse('name=soFly&course=jade&course=node&from=')
//{ name: 'soFly', course: [ 'jade', 'node' ], from: '' }
querystring.parse('name=soFly,course=jade,course=node,from=',',')
querystring.parse('name:soFly,course:jade,course:node,from:', ',', ':')

querystring.escape('<赵伟杰>') 
//转义
//'%3C%E8%B5%B5%E4%BC%9F%E6%9D%B0%3E'
querystring.unescape('%3C%E8%B5%B5%E4%BC%9F%E6%9D%B0%3E')
//反转义
//'<赵伟杰>'
```




url.parse('//www.imooc.com/video/6710',true,true)

  
  解析URL为对象

- url.format
```
>url.format({
  protocol: 'http:',
  slashes: true,
  auth: null,
  host: 'www.imooc.com',
  port: null,
  hostname: 'www.imooc.com',
  hash: null,
  search: null,
  query: null,
  pathname: '/video/6710',
  path: '/video/6710',
  href: 'http://www.imooc.com/video/6710' } )

  //'http://www.imooc.com/video/6710'
```
- url.resolve