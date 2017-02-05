//表单序列化 就是将表单里的input值 拼成username=123&password=321



var myform = document.querySelector('#myform');
function serializable(myform){
    //我们要序列化myform表单
    myform.elements //所有的表单元素
    //DOM集合 是类数组
    var result = [];
    var arr = Array.prototype.slice.call(myform.elements);
    arr.forEach(function (item) {
        if(item.type=='text'||item.type=='password'){
            //将数表单的键和值通过=拼接放到数组内
            result.push(item.name+'='+item.value);
        }
    });
    return result.join('&');
}
//{username:123,passworld:321}
function toJson(myform){
    //我们要序列化myform表单
    //DOM集合 是类数组
    var result = {};
    var arr = Array.prototype.slice.call(myform.elements);
    arr.forEach(function (item) {
        if(item.type=='text'||item.type=='password'){
            //将数表单的键和值通过=拼接放到数组内
            result[item.name] = item.value;
        }
    });
    return result;
}
btn.addEventListener('click', function () {
    var xhr = new XMLHttpRequest();
    //post请求 发送给服务器端
    xhr.open('post','/reg',true);
    //xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');
    xhr.setRequestHeader('content-type','application/json');
    xhr.responseType = 'json'; //设置响应回来的数据就是json格式
    xhr.onload = function () {
        //直接取回来的就是json格式JSON.parse(xhr.responseText)
        var str = '';
        str+='<ul>';
        xhr.response.forEach(function (item) {
            str+='<li>'+item.username+'   '+item.password+'</li>'
        });
        str+='</ul>';
        list.innerHTML = str;
    };
console.log(JSON.stringify(toJson(myform))); //{username:123,passworld:321}
    //xhr.send(serializable(myform)); //send里放字符串
    xhr.send(JSON.stringify(toJson(myform)));
//服务器端应该可以解析username=123&password=321或者{username:123,passworld:321}
},false);


