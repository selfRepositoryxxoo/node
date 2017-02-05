//读写文件要导入核心模块fs
//file system
var fs = require('fs');
var person = {};
//默认是buffer，他是全部读到缓存内，不能读取比内存大的文件
//带sync的是同步方法，同步方和异步方法，通常同时出现
//默认encoding是null 我们可以指定utf8
try{
    var name = fs.readFileSync('./name1.txt',{flag:'r',encoding:'utf8'});
    var age =  fs.readFileSync('./age.txt','utf8');
}catch(e){
    person.name = name;
    person.age = age;
    console.log(person);
}
//同步的方法可以try catch来捕获异常


