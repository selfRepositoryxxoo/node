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



