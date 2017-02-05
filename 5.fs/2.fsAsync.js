var fs = require('fs');

//异步方式是通过回调函数来获取数据
//param1 错误对象 param2:获取的数据默认也是buffer类型,指定编码格式和默认的flag
//异步谁先执行完看谁先返回数据


var person = {};
fs.readFile('./name.txt','utf8',function (err,data) {
    person.name = data;
    out();//因为不知道什么时候算拿完了，只能写入后就调一下方法
});
fs.readFile('./age.txt','utf8', function (err,data) {
    person.age = data;
    out()
});
function out(){
    //获得person对象的属性的长度,获取数据的速度是读取文件最久的那个时间
    if(Object.keys(person).length==2)
    console.log(person);
}
//解决异步的问题就用计数器
//promise


/*var obj = {
    name:1,
    age:2,
    c:3
}
//获得的keys以数组的形式进行返回
console.log(Object.keys(obj));*/





/*
setTimeout(function () {
},2000);
*/
//通过计数器的方式


var person = {}
fs.readFile('./name.txt','utf8', function (err,name) {
    fs.readFile('./age.txt', 'utf8',function (err,age) {
        person.name = name;
        person.age = age;
        console.log(person);
    });
});