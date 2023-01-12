const config = require('./config');
const express = require('express');
const app = express();

app.use((error,req,res,next)=>{
    throw new Error(error.message)
});


app.listen(config.port, ()=>{
    console.log(`back-end server listening on ${config.port}`)
})
