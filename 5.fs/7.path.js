//fs http url util path string_decoder

//处理路径的核心模块path
var path = require('path');
//1.path.join方法
console.log(path.join('a','b','..'));
//会把两个路径拼接起来，以自己系统的分隔符
//1.支持多个连接
//2.支持上一个目录
//__dirname 当前文件的目录名字
console.log(path.join(__dirname,'..','a.js'));
//require.resolve();
//path.resolve解析路径
console.log(path.resolve('..','a.js/'));
//1.什么都不写会以当前的目录做解析
//2.只写/会回到根目录
//3.支持..
//4.不会保留最后一个/
//将不合法的路径转换成标准路径
var format = path.normalize('a////c////d///..//e/');
console.log(format);
//默认多个/会转换成一个/
//最后一个/会保留
//两个点会变成上一级目录


//path.basename获得文件的基本名字
//后面写上匹配出来的当前的文件的后缀
//拿去一个文件的名字 在拿去另一个文件的后缀，生成新的文件
console.log(path.basename('a.js','.js'));
//path.extname
console.log(path.extname('b.png'));
console.log(path.basename('a.js','.js')+path.extname('b.png'));
//获得目录分割符
console.log(path.sep);
//获取环境变量分隔符 mac是冒号，
console.log(path.delimiter); //可以区分是mac还是windows