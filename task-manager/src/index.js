const express=reuire("express");

const app=express();
const port=process.env.PORT||1200;

app.listen(port,()=>{
    console.log("Server is running on port"+port)
})