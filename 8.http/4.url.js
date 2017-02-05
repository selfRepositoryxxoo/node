var url = require('url');

var urlObj = url.parse('https://123:jw@www.baidu.com:90/s?wd=charles&rsv_spt=1&rsv_iqid=0x9d1b5b1e0017bcdc&issp=1&f=8&rsv_bp=0&rsv_idx=2&ie=utf-8&tn=baiduhome_pg&rsv_enter=1&rsv_sug3=4&rsv_sug1=4&rsv_sug7=100#123',true);
console.log(urlObj);
/* protocol: 'https:', 协议
slashes: true,  是否有//
    auth: '123:jw',  当前用户名密码
    host: 'www.baidu.com:90', 地址（端口）
    port: '90', 端口号
    hostname: 'www.baidu.com', 地址
    hash: '#123',hash值
    search: '?wd=charles&rsv_spt=10', 查询串
    query:
    { wd: 'charles',}, 查询对象当参数为true
    pathname: '/s', 当前的路径地址
    path: '/s?wd=charles, 当前的路径
    href: 'https://123:jw@www.baidu.com:90/s?wd=charles } 完整地址
