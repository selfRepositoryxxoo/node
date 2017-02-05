//写文件的方法也有同步的和异步的
var fs  = require('fs');
//path文件的路径
//data 要写入的数据 字符串格式和buffer格式
//w代表的是我们打开文件要做的操作 是写入
//如果文件不存在 会帮我们创建文件
//fs.writeFileSync('./hello.txt',"珠峰",{flag:'a'});

//{flag:'a'}等同于appendFile
fs.appendFileSync('./hello.txt',"珠峰");
//return O_TRUNC 截断 | O_CREAT 创建 | O_WRONLY 只写








