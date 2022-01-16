const express=require("express");
require("./db/mongoose");
const userRouter=require("./routers/user");
const taskRouter=require("./routers/task")

const app=express();
const port=process.env.PORT||1200;

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port,()=>{
    console.log("Server is running on port "+port)
})

const bycrypt=require("bcryptjs");
const myfun=async()=>{
    const password ="123456789";
    const hashedPassword = await bycrypt.hash(password, 8)
    
    console.log(password);
    console.log(hashedPassword)
    const comp=await bycrypt.compare(password, hashedPassword);
    console.log(comp)
}
myfun()