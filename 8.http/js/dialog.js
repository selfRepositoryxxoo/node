//创建xhr对象
function clock(){
//打开文件 方法  路径
    var xhr = new XMLHttpRequest();
    xhr.open('get','/clock',true);
//监听变化
    xhr.onload = function () {
        //加载完成后调用的方法
        //xhr.responseType='json';
        console.log(xhr.responseText);
        //xhr.response当指定类型为json的时候不能使用responseText
        time.innerHTML = xhr.response;
    };
    xhr.send();
}
clock();
setInterval(clock,1000);
/*xhr.onreadystatechange = function () {
    if(/^2\d{2}$/.test(this.status)&&this.readyState==4){

    }
}*/
//发送数据
