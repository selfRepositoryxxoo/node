/*//current working directory 当前工作目录
console.log(process.cwd());
console.log(__dirname);
//change dir 改变目录
process.chdir('..');
//当前的工作目录是可以更改的 当前文件夹是不能更改
console.log(process.cwd());
console.log(__dirname);*/
//监听用户输入,标准输入
/*process.stdin.on('data', function (data) {//data就是我们监听到的数据
    console.log(data.toString());
});*/
//向控制台内输出 console.log调用的就是这个方法
process.stdout.write('hello');
//监听内存的使用量
var arr = [];
while (true){
    //rss 常住内存
    //heapTotal使用的总量
    //heapUsed 堆的使用量
    arr.push({});
    console.log(process.memoryUsage()); //检测内存泄漏
}
