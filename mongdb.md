## mongdb 库 集合 文档   help(帮助)
```

show dbs 
use person
db.createCollection()// db.createCollection("ycd")
 show collections//所有的collections的集合
 db.{集合的名字}.drop()//删除集合
 对集合插入文档
db.{集合的名字}.insert([{name:"ycd",age:88},{name:"xiaohong",age:99}])
db.ycd.save([{name:"ycd",age:88},{name:"xiaohong",age:99}])
db.{集合的名字}.find()

```