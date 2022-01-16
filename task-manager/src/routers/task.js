const express=require("express");
const Tasks=require("../models/tasks");
const router= new express.Router;

router.post("/Tasks",async (req,res)=>{
    const Task=new Tasks(req.body);
    try{
        await Task.save();
        res.status(201).send(Task)
    }catch(error){
        res.status(400).send(error);
    }
})

router.get("/Tasks",async (req,res)=>{
    try{
        const tasks=await Tasks.find({});
        res.send(tasks)
    }catch(err){
        res.status(500).send()
    }
})

router.get("/Tasks/:id", async(req,res)=>{
    const _id=req.params.id;
    try{
        const tasks=await Tasks.findById(_id);
        if(!tasks){
            res.status(404).send()
        }
        res.status(200).send(tasks)
    }catch(err){
        res.status(500).send()
    }
})

router.patch('/Tasks/:id', async(req,res)=>{
    const update=Object.keys(req.body);
    const allowedUpdate=["description", "completed"];
    const isValidOperation=update.every((updates)=>allowedUpdate.includes(updates))

    if(!isValidOperation){
        res.status(404).send({error:"Invalid"})
    }

    try{
        const task=await Tasks.findByIdAndUpdate(req.params.id, req.body,{new:true, runValidators:true});
        res.send(task)
    }catch(err){
        res.status(500).status(err)
    }
})

router.delete("/Tasks/:id", async(req,res)=>{
    try {
        const task=await Tasks.findByIdAndDelete(req.params.id);
        if(!task)
        {
            res.status(500).send({error:"no such task"})
        }
        res.send(task)
    } catch (error) {
        res.status(404).send(error)        
    }
})

module.exports=router;