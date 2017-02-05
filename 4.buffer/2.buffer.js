//定义buffer三种方式
//1.指定大小
/*var buffer = new Buffer(6);
//buffer指定大小后，是一串随机的
buffer.fill(0); //手动将桌子擦干净
console.log(buffer);*/
//2.指定数组的方式
var buffer = new Buffer([17,18,19]);
//buffer存储的是16进制 缝16进1
console.log(buffer);
//3.可以指定字符串的方式
var buffer = new Buffer('珠峰','utf8');
//node里不支持gbk
console.log(buffer);

//1.buffer和字符串的区别
var buffer = new Buffer('珠峰','utf8');
var str = "珠峰";
console.log(str.length);
console.log(buffer.length);//buffer的长度
//2.和数组的区别
var arr = [1,2,3];
var newArr = arr.slice(0,1);
newArr[0] = 100;
console.log(arr);

var buffer = new Buffer("珠");
console.log(buffer);
var newBuffer = buffer.slice(0,1);
newBuffer[0] = 100;
console.log(buffer); //16*6+4 64是16进制  16*4+4

var buffer = new Buffer(['a',0,1]);
//大于256的对256取模 256+负的 如果不在范围就是0
console.log(buffer);


//字符串转换成buffer
var buffer = new Buffer("珠峰");
//指想输出峰 toStirng的参数('编码',开始,结尾)
console.log(buffer.toString('utf8',3,6));//包前不包后

var buffer = new Buffer('珠峰');
console.log(buffer.slice(0,4).toString());
console.log(buffer.slice(4).toString());
//自带模块string_decorder
var String_decoder = require('string_decoder').StringDecoder;
var sd = new String_decoder; //向当于实例一个对象
console.log(sd.write(buffer.slice(0,4)).toString());
console.log(sd.write(buffer.slice(4)).toString());
//都往sd对象里写 写第一次的时候，发现不能组成汉字的留下来，写第二次的时候在拼接上
