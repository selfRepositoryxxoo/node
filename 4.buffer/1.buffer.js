//buffer的长度一旦确定就不能更改了

//一个字节由8个位组成
//2进制最大 11111111  =>  100000000-1
var sum = 0;
for(var i = 0; i<8;i++){
    sum+= Math.pow(2,i)
};
console.log(sum);
console.log(Math.pow(2,8)-1);
//ff = > 15*16+15*16^0
console.log(15*16+15);
//utf8格式下由几个字节组成？ 3个
