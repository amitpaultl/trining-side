 const express = require('express');
 const app = express();
 const cors = require('cors');
 app.use(cors());

 const Port = process.env.Port || 5000;

 app.get('/',(req, res)=>{
    res.send('5000 port rining')
 })


 app.listen(Port, ()=>{
    console.log('your server ring');
 })