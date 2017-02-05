 ```
 cd  node_modules cd 文件夹 然后是 生成一个json的文件；
  第三方模块是不是用加./的
  npm init -y
  是一键生成page.json的文件夹；
  ```
```
console.log(module);是根据module.path来查找的；
全局安装的文件是无法查找到的 所以我们安装的node_modules在这个文件下；
我们不会引用全局的环境，在命令行用的，上线的和我们全局的的模块是没有关系的；
我们需要的模块会安装在node_modules
```
## buffer
```
一个字是3个字节但是  假如没有通过 截取的时候 不准却的话 通过一个
buffer是固定的 创建Buffer是固定的，是没有办法改变的；
读的东西放在buffer里面 他们全部是读到缓存内；不能读取比内存大的文件；

```
```
 process.nextTick ()
 //监听用户输入,标准输入
process.stdin.on('data',function(data){
    console.log(data) //<Buffer e6 9d a8 e5 86 b2 e5 a4 9a 0a>
});
需要转成字符串才是我们认识的
process.stdin.on('data',function(data){
    console.log(data.toString())
});
//向控制台内输出 console.log调用的就是这个方法
process.stdout.write('hello')
```
```
console.time('ycd')
setTimeout(function(){
    console.timeEnd('ycd')
},200)
```
```
异步的方法是不能通过返回值接受的
```
## 为什么   exports=person//(包的名字)是不可以
```
~function(require,module,exports,__dirname,__filename){
     exports = module.exports = {};
    //你直接使用exports=person 是不可以的
   // 两种方式：
    moudle.exports=person;
    exports.person=person
    return module.exports
}()
```
## utils
```
我们一般使用的继承：
Child.prototype = new Parent();
Child.prototype.__proto__ = Parent.prototype;
Child.prototype = Object.create(Parent.prototype);
util.inherits(Child,Parent); //这种继承是类的继承
var util = require('util');
function Parent() {
    this.age = '1'
};
Parent.prototype.smile = function(){
    console.log('xiao')
}
function Child() {
    this.name = 'ycd'
}
util.inherits(Child, Parent);
var child=new Child();
child.smile();
console.dir();//util.inspect()默认调用这个方法
//定义属性
Object.defineProperty(obj,'age',{
    value:100, //当前设置的值
    enumerable:true, //设置可枚举 就是私有的可以被for in 遍历出来的额
    writable:false,//是否可被重写
    configurable:false//是否可配置
});
```
## 查找规则
```
console.log(module); //中path就是查找股则  下载第三方模块
npm
```
## buffer
```
buffer 大小一旦确认无法改变
var buffer = new Buffer(6);
console.log(buffer);
buffer.fill(0);//将buffer删除带
var buffer=new Buffer('杨崇多');
console.log(buffer.toString());*/
var buffer=new Buffer([1,3]);
console.log(buffer)
```
##  buffer  的模块 string_decoder 模块
```
谨记：是统一转 先把所有的代码统一写到sd里面在通过toString()
var buffer = new Buffer('崇多');
var StringDecoder = require('string_decoder').StringDecoder;
var sd = new StringDecoder;
console.log(sd.write(buffer.slice(0, 4)).toString())
console.log(sd.write(buffer.slice(4)).toString())
```
## base64  转换
```
var buffer = new Buffer('多')
console.log(buffer)
//e5 a4 9a
/*console.log(parseInt('e5',16));
console.log(parseInt('a4',16));
console.log(parseInt('9a',16))*/;
/*
229
164
154*/
/*console.log((229).toString(2))
console.log((164).toString(2))
console.log((154).toString(2))*/
/*00111001  00011010 00010010  00011010*/
/*   console.log(parseInt('00111001',2));
     console.log(parseInt('00011010',2));
     console.log(parseInt('00010010',2))
     console.log(parseInt('00011010',2))*/

//57 26 18 26 是当前位子在base64中代表的索引
var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
str+= str.toLowerCase();
str+='0123456789';
str+='+/';
console.log(str[57]+str[56]+str[62]+str[32]);//54+g
var buffer= new Buffer('54+g','base64');
console.log(buffer.toString());
//00111111 最大值是64 要把255的转换64的在字符串中取值
```
## 返回一个数组的形式，只读子级的目录
fs.readFile()
fs.readdirSync()
```
var fs = require('fs');
var per = {};
//处理异步的方法有两种 ：index 和 keys promise
fs.readFile('./age.txt', 'utf8', function (err, data) {
    per.name = data
    out()
});
fs.readFile('./name.txt', 'utf8', function (err, data) {
    per.age = data
    out()
});
function out() {
    if (Object.keys(per).length == 2) {
        console.log(per)
    }
}
var index = 0;
fs.readFile('./age.txt', 'utf8', function (err, data) {
    per.age = data
    index++
    out()
})
fs.readFile('./age.txt', 'utf8', function (err, data) {
    per.name = data
    index++
    out()
});
function out() {
    if (index == 2) {
        console.log(per)
    }
}
```
## 写文件内容
 fs.writeFileSync()
 fs.appendFileSync()
```
//即使相同也会写入但是再次执行还是一样的
fs.writeFileSync('./hello.txt',"ycd",{flag:'a'});
fs.writeFileSync('./hello.txt',"ycd",{flag:'a'});
//{flag:'a'}等同于appendFile
fs.appendFileSync('./hello.txt',"珠峰");//可以重复调用的方法
//return O_TRUNC 截断 | O_CREAT 创建 | O_WRONLY 只写
```
##
 fs.exists 文件是否存在()bollean
fs.existsSync 文件是否存在
 fs.mkdirSync  创建文件同步
  fs.mkdir 创建文件异步的
```
makeP('a/b/c/d');
function makeP(path){
    //将path以/的方式分割开
    var arr = path.split('/');
    //在原数组里，不停的取相对应的目录，加入/
    for(var i = 1; i<=arr.length;i++){
       var curDir =  arr.slice(0,i).join('/');
        //我们在创建目录之前，要先查看curDir是否存在
       var flag = fs.existsSync(curDir);
        //flag表示当前是否存在
        if(!flag)
        fs.mkdirSync(curDir);//创建目录
    }
}
```
##  删除文件 unlinkSync rmdirSync
fs.statSync()//判断目录的状态要用全目录
stat.isDirectory() 是否是文件夹呢
stat.isFile() 是否是文件
fs.rmdirSync() 删除文件夹
fs.unlinkSync() 删除文件
```
curArr.forEach(function (item) {

    var stat = fs.statSync('./dir/' + item);
    if (stat.isDirectory()) {
        console.log('./dir/' + item + "是文件夹");
        fs.rmdirSync('./dir/' + item);
    }
    if (stat.isFile()) {
        console.log('./dir/' + item + "是文件");
        fs.unlinkSync('./dir/' + item);
    }
});

```
## path
```
path.join('a','b','..')会把两个路径拼接起来，以自己系统的分隔符
path.normalize('a////c////d///..//e/')将不合法的路径转换成标准路径
path.resolve解析路径path.resolve('..','a.js/')
path.basename获得文件的基本名字
path.extname('b.png')
console.log(path.sep);获得目录分割符
console.log(path.delimiter); //可以区分是mac还是windows获取环境变量分隔符 mac是冒号，
```