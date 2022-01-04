const mongoose = require('mongoose');
const validator=require ("validator");

mongoose.connect("mongodb://localhost:27017/task-manager-api", {
    useUnifiedTopology:true,
})

const Users=mongoose.model("Users",{
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true,
        lowercase:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error ("invalid mail id")
            }
        }
    },
    age:{
        type:Number,
        default:0,
        validate(value){
            if(value<0){
                throw new Error ("Shall not be less than 0")
            }
        }
    },
    password:{
        type:String,
        minLength:7,
        required:true,
        trim:true,
        validate(value){
            if(value.toLowerCase().includes("password")){
                throw new Error ("shouldn't be password")
            }
        }
    }
})

// const me=new Users({
//     name:"Salu",
//     email:"salu@gmail.com",
//     age:22,
//     password:'123456987'
// })

// me.save().then(()=>{
//     console.log(me)
// }).catch((error)=>{
//     console.log("error", error)
// })

const tasks=mongoose.model("tasks",{
    description:{
        type:String,
        required:true,
        trim:true
    },
    completed:{
        type:Boolean,
        default:false
    },
})

const task=new tasks({
    description:"Welding"
})

task.save().then(()=>{
    console.log(task)
}).catch((error)=>{
    console.log("error", error)
})