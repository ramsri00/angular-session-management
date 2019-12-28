const express= require('express');
const path=require('path');
const app= express();

app.use(express.static(__dirname + '/dist/register' ));
app.listen(process.env.PORT || 3000);

app.get('/*'),function(req,res){
    res.sendFile(path.join(__dirname+'dist/register/index.html'));
}

console.log('server is listening'); 