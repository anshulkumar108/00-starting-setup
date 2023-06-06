const mysql=require('mysql2')

const pool=mysql.createPool({
    host:'localhost',
    user:'root',
    database:'node.js',
    passsword:'anshulme96',

})

module.exports=pool.promise();