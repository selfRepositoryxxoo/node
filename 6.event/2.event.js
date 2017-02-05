//发布订阅模式node给我们提供一个这样的库
//核心模块
var EventEmitter = require('events');
//他自带on方法 once方法 removeListener emit

var e = new EventEmitter();
function loveMoney(who){
    console.log('loveMoney'+who);
}
function loveCry(who){
    console.log('loveCry'+who);
}
//设置最大监听数
//e.setMaxListeners(1);
e.once('girl',loveMoney);
e.once('girl',loveCry);
e.on('girl',loveCry);
//移出监听 会先移出最近绑定的事件
//e.removeListener('girl',loveCry);
//移除所有事件
//e.removeAllListeners('girl');

e.emit('girl','xxx');
e.emit('girl','xxx');
e.emit('girl','xxx');
//once执行后就被删除掉了 on不能删除
//当前绑定的监听个数
console.log(e.listenerCount('girl'));
console.log(e.listeners('girl'));
//warning警告你


a = b = {name:1}
b.name =200;
console.log(a);