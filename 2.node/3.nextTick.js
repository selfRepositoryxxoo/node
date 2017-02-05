//第二个本上的
//setImmediate是给setTimeout一些机会
setImmediate(function () {
    console.log('setImmediate1');
});
setTimeout(function () {
    console.log('setTimeout');
},0);
process.nextTick(function () {
    console.log('nextTick');
});
/*for(;true;){
    console.log(100);
}*/
console.log(1999);
//在第二个小本上的（异步的方法）



//大致上的顺序 同步代码 > nextTick > setTimeout(0) > setImmediate > io