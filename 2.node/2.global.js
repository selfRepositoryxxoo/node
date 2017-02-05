/*
//{} 在node服务器端 this就是global
console.log(this);
console.log(this===exports);*/


/*console.log('log');
console.error('error');
console.info('info');
console.warn('warn');
console.dir('dir');*/
//可以计算代码的执行时间
console.time('start');
for(var i = 0; i<1000000000;i++){
}
console.timeEnd('start');
console.time('start1');
setTimeout(function () {
    //如果是异步代码就算时间，要放到异步代码中
    console.timeEnd('start1');
},2000);

//c:\Users\10354_000\Desktop\node6\2.node
//__dirname表示当前文件夹的名字，他是不可更改的
console.log(__dirname);
//c:\Users\10354_000\Desktop\node6\2.node\2.global.js
//当前文件的绝对路径
console.log(__filename);
console.log(global);



