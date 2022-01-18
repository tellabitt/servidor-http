const express = require('express') ;
const res = require('express');
let app = express();

app.get('/', (req,res)=>res.send("Olá Mundo!"));
//criando um servidor
app.listen(3040, ()=>console.log("Servidor está rodando na porta 3040"));