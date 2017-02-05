//查找规则
//如果前面不带./的一定是第三方模块或者核心模块
//mime 引用前没有./ ,如果有./就是文件模块

//var mime = require('mime');
//他会先查找是不是核心模块
//查找node_modules下的文件夹
var jw = require('jw');
console.log(jw);
//npm init -y 一件生成package.json
//如果包下没有main.js 会查找index.js,找到了仍然可以返回
//我们写的包安装后 node_modules 直接可以用了
//如果当前没有会在向上一级找，直到找到根目录为止
/*
(function(exports,require,module,__dirname,__filename){
})()*/
console.log(module); //不会找全局的
//第三方模块的查找规则是根据module.paths来查找的
//如果文件模块没有后缀node 会尝试添加.js .json 后缀进行查找


