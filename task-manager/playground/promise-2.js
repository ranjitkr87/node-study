require("../src/db/mongoose");
const Tasks=require("../src/models/tasks")

// Tasks.findByIdAndDelete("61d3f1eee8058d284df6ac41").then((task)=>{
//     console.log (task);
//     return Tasks.find({completed:false})
// }).then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//     console.log(err) 61d401bdc10f4afae459fecb
// })

const deletaTaskAndCount=async(id)=>{
    const delet=await Tasks.findByIdAndDelete(id);
    const count=await Tasks.countDocuments({completed:false});
    return count
}

deletaTaskAndCount("61d401bdc10f4afae459fecb").then((count)=>{
    console.log (count)
}).catch((err)=>{
    console.log(err)
})