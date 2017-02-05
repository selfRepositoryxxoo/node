//我们读写一个文件肯定要先读取过来，读完了以后再写入
function read(callback){
    setTimeout(function () {
        callback();
    },2000);
}
function write(){
    console.log('写入');
}
read(write);

/*const read= ()=>{

}*/
/*function b(){

}
div.onclick = function a(){
    b()
}*/

