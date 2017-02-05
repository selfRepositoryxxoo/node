//querystring 用来解析查询字符串的 核心模块
var querystring = require('querystring');
//手动设置分隔符 param1是要解析的字符串  param2 每一组内容的分隔符 键值分隔符
//解析成对象
var obj = querystring.parse('username==123&&password==321','&&','==');
//将对象转换成字符串
var str = querystring.stringify({ username: '123', password: '321' },'*','@');
console.log(str);

