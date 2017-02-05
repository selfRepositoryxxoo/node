 current working directory 当前工作目录
 console.log(process.cwd());
 process.chdir('..');
 当前的工作目录是可以更改的 当前文件夹是不能更改
  console.log(process.cwd());
  console.log(__dirname)
  //监听用户输入,标准输入
  process.stdin.on('data', function (data) {//data就是我们监听到的数据
      console.log(data.toString());
  });
  //向控制台内输出 console.log调用的就是这个方法
  process.stdout.write('hello');
  process.memoryUsage()
  console.time('start');
  for(var i = 0; i<1000000000;i++){
  }
  console.timeEnd('start');
  console.time('start1');
  setTimeout(function () {
      //如果是异步代码就算时间，要放到异步代码中
      console.timeEnd('start1');
  },2000);
//__dirname表示当前文件夹的名字，他是不可更改的
console.log(__dirname);
//c:\Users\10354_000\Desktop\node6\2.node\2.global.js
//当前文件的绝对路径
console.log(__filename)
//Child.prototype = new Parent();
//Child.prototype.__proto__ = Parent.prototype;
/*Child.prototype = Object.create(Parent.prototype)
//查找规则
//如果前面不带./的一定是第三方模块或者核心模块
//mime 引用前没有./ ,如果有./就是文件模块
//buffer的长度一旦确定就不能更改了
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
var buffer = new Buffer(6);
var buf1 = new Buffer('珠');
var buf2 = new Buffer('峰');
//targetBuffer, 目标buffer
//targetStart,  目标的开始
//sourceStart,  原buffer的开始
//sourceEnd     原buffer的结束
/*buf1.copy(buffer,0,0,3);
buf2.copy(buffer,3,0,3);*/
/*buf1.copy(buffer,0);
buf2.copy(buffer,3);//默认是从原buffer的开始考到结束
console.log(buffer.toString());*/

//合并buffer Buffer.concat();
//list, 要合并buffer的列表以数组形式
//totalLength 总长度
var bu1 = new Buffer('珠峰')
var bu2 = new Buffer('培训')
/*var newBuffer = Buffer.concat([bu1,bu2]);
console.log(newBuffer.toString());*/
//连接buffer
Buffer.myConcat = function (list,totalLength) {
    //把buffer拼成一个  buffer.copy考入到大buffer中之后返回
    //先判断当前list的个数，如果只有一个直接返回
    if(list.length==1){
        return list[0];
    }
    //我们要判断totalLength有没有传递
    if(typeof totalLength=='undefined'){
        totalLength  = 0;
        //我们要根据list的长度来计算
        //遍历数组拿到每一项的长度
        list.forEach(function (item) {
            totalLength+=item.length;
            //计算出总长度
        });
    }
    //构建buffer
    var buffer = new Buffer(totalLength);
    //要把每一个小的buffer copy到大buffer里面
    var index = 0;
    list.forEach(function (item) {
        //将每一个item放入到buffer中
        item.copy(buffer,index);
        index+= item.length;
    });
    //totalLength过长，我们通过自己维护的索引进行截取
    return buffer.slice(0,index);
};
console.log(Buffer.myConcat([bu1,bu2],100).toString());
//判断长度传递没有，判断不够长，过长的状况
//判断是否是buffer
console.log(Buffer.isBuffer(new Buffer(1)));
//字节的长度
console.log(Buffer.byteLength(new Buffer('珠峰')));
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
//写文件的方法也有同步的和异步的
var fs  = require('fs');
//path文件的路径
//data 要写入的数据 字符串格式和buffer格式
//w代表的是我们打开文件要做的操作 是写入
//如果文件不存在 会帮我们创建文件
//即使相同也会写入但是再次执行还是一样的
fs.writeFileSync('./hello.txt',"ycd",{flag:'a'});
fs.writeFileSync('./hello.txt',"ycd",{flag:'a'});

//{flag:'a'}等同于appendFile
fs.appendFileSync('./hello.txt',"珠峰");//可以重复调用的方法
//return O_TRUNC 截断 | O_CREAT 创建 | O_WRONLY 只写
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
 var fs = require('fs');
 //读取dir目录 返回一个数组的形式，只读子级的目录
 var curArr = fs.readdirSync('./dir');
 console.log(curArr);
 //读取目录后要操作目录，的到目录后先查看目录是文件夹还是文件
 //fs.statSync 查看文件状态
 //遍历出来得到的每一项查看状态
 curArr.forEach(function (item) {
     //判断目录的状态要用全目录
     var stat = fs.statSync('./dir/'+item);
     //stat代表当前状态 通过这个状态判断是文件还是文件夹
     //删除的时候只能删除空文件夹
     if(stat.isDirectory()){
         console.log('./dir/'+item+"是文件夹");
         //删除目录
         fs.rmdirSync('./dir/'+item);
     }
     if(stat.isFile()){
         console.log('./dir/'+item+"是文件");
         //删除文件
         fs.unlinkSync('./dir/'+item);
     }
 });
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
 //同步方法拷贝
 var fs = require('fs');
 //source原文件的路径
 //target目标文件的地址
 /*function copy(source,target){
     var data = fs.readFileSync(source,'utf8');
     //写数据把都出来的数据写入
     fs.writeFileSync(target,data);
 }*/
 //异步的copy方法
 function copy(source,target){
     //异步的读取通过回调函数的方式，data读到的数据
     fs.readFile(source, function (err,data) {
         if(!err){
             //如果没有错误，写入到文件中将data数据
             fs.writeFile(target,data, function (err, data) {
             });
         }
     });
 }
 copy('./hello.png','./b.png'); 


