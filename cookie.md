## 原生的
```
服务器是通过 res.setHeader('Set-Cookie',['name=ycd','age'=10])种植给浏览器的cookie
每次浏览器发送请求的时候都会带着cookie，在req.headers['cookie']就可以获取全部的cookie
服务器在通过res.send()可以把cookie在返回到客户端
 res.setHeader('Set-Cookie', 'ycd=ycd');
    res.cookie('name', 'zfpx', {httpOnly: true});
    res.send(req.cookies);
    req.headers['cookie'] 
    var cookie = req.headers['cookie'];
    res.end(cookie);
```    
## cookie加密与不加密
```
引入require('cookie-parse')('密钥')//第一次
app.get('/visit',function(req,res){
    var visit = req.signedCookies.visit;//因为我们使用了那个cookieParser('密钥')，就会这个
    //之前浏览器发送携带的cookie都会放在req.cookies里面现在不在了全部在req.signedCookies//因为加密了
    console.log(visit)
    if(visit){//如果有值表示以前访问过，写入过visit字段
        visit = parseInt(visit)+1;
    }else{
        visit = 1;//如果没有值初始化为1
    }//使用express中的方法对cookie 设置cookie加密
    res.cookie('visit',visit,{signed:true});//要对cookie进行加密这个
    res.send(`这是你的第${visit}次访问`);
});
***********************
不加密就放在req.cookies中
```
## session 是服务器端的 cookie是客户端的 session是通过cookie进行传递的
```
var session = require('express-session');
//当使用了session中间件之后，会在req.session的属性
//session的中间件
app.use(session({
 name:'sessionId',//指定向客户端保存时的名称
 cookie:{
  maxAge:10*1000//指定cookie的过期时间
 },
 genid:function(){// 生成session的ID因为
  return ''+(count++);
 },
 resave:true,//每次都重新保存session
 saveUninitialized:true,//保存未初始化过的session
 secret:'ycd'//密钥 加密connect.sid
}));
app.get('/visit',function(req,res){
    //req.session  是此用户在服务器上对应的数据对象
   var visit = req.session.visit;
   if(visit){
     visit++;
   }else{
     visit = 1;
   }
   req.session.visit = visit;//cookie还是通过cookie进行设置 现在是对session的操作直接赋值就可以了
   res.send(`你是第${visit}次访问服务器`);
});
```