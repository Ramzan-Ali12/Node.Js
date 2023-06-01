var express = require('express');
//express app
var app = express();

app.get('/', (req, res)=>{
// res.send("<h1>This is the Home page</h1>");
res.sendFile('./views/home.html',{root:__dirname});

}); 

app.get('/about', (req, res)=>{
    res.sendFile('./views/about.html',{root:__dirname});
}); 
app.get('/about-us', (req, res)=>{
    res.redirect('/about');
}); 


app.get('/services', (req, res)=>{
    res.sendFile('./views/services.html',{root:__dirname});
}); 
//404 page
app.use((req,res)=>{
    res.statusCode(404).sendFile('./views/404.html',{root:__dirname});
})
//listen for requests
app.listen(3000);