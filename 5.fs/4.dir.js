//创建目录
var fs = require('fs');
//fs.mkdir fs.mkdirSync;
//必须要保证上一目录有了才可以创建目录
//fs.mkdirSync('a/b/c/d');
//同步方法创建目录
//a
//a/b
//a/b/c
//a/b/c/d
makeP('a/b/c/d');
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
    }
};

//我们还要判断文件是否存在 fs.exists
//作业1：写个异步的创建目录的方式，递归
