//监听文件
var fs = require('fs');
fs.watchFile('./4.dir.js', function (cur,old) {
    console.log(cur)
})