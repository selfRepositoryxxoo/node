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
