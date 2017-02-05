//从任意进制 转换成10进制
//parseInt()
//后面的参数是告诉parseInt当前进制是什么进制
parseInt('111',2);//将2进制的111转换成10进制
console.log(parseInt('111',2));
console.log(parseInt('11',8));
console.log(parseInt('11',16));
//从10进制转换成任意进制
//toString
console.log((2).toString(2));//第一个放的是10进制，toString的参数是要转换成什么进制
console.log((7).toString(8));
console.log((22).toString(16));
console.log((100).toString(16));
//任意进制 - > 10进制 - > 任意进制

//base64  二进制最大的是255 最大不超过64
var sum  = 0;
for(var i = 0 ;i<6;i++){
    sum+= Math.pow(2,i);
}
console.log(sum); //00111111在base64中最大
//base64是由可见编码组成 大写字母+小写字母+ 0-9+ '+/'
//00111111 在10进制中最大是63  0-63
var buffer = new Buffer('珠');
//e7 8f a0;
// 我们要先把16进制转换成10进制
console.log(parseInt('e7',16));
console.log(parseInt('8f',16)); //f是字母的第6母  9 + 6
console.log(parseInt('a0',16));
//231 143 160，我们要将10进制转化成2进制
console.log((231).toString(2));
console.log((143).toString(2));
console.log((160).toString(2));
//11100111 10001111 10100000当前文字代表的2进制
//3*8
//把三个二进制数 变成4个二进制数
//4*6
//00111001 00111000 00111110 00100000 转换后每一个二进制最大值都是63
//把2进制在转换成10进制
console.log(parseInt('00111001',2));
console.log(parseInt('00111000',2));
console.log(parseInt('00111110',2));
console.log(parseInt('00100000',2));
//57 56 62 32 是当前位子在base64中代表的索引
var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
str+= str.toLowerCase();
str+='0123456789';
str+='+/';
console.log(str[57]+str[56]+str[62]+str[32]);//54+g
var buffer= new Buffer('54+g','base64');
console.log(buffer.toString());
//00111111 最大值是64 要把255的转换64的在字符串中取值

//规则
//1.将buffer的16进制装换成10进制
//2.将10进制转换成2进制
//3.把2进制连接到一起，每隔6位分割开，前面补00，
//4.在转换成10进制
//5.在64位字符串中进行通过索引查找
//6.返回base64编码

