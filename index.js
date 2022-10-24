 const express = require('express');
 const app = express();
 const cors = require('cors');
 app.use(cors());

 const Port = process.env.Port || 5000;
 const courses = require('./data/courses.json')
 app.get('/',(req, res)=>{
    res.send('5000 port rining')
    console.log(res);
 })


 app.get('/course', (req, res) =>{
   res.send(courses)
   
})

app.get('/course/:id', (req, res) =>{
   const id = parseInt(req.params.id);
   const course = courses.find(number => number.id === id);
   res.send(course);

})

 app.listen(Port, ()=>{
    console.log('your server ring');
 })