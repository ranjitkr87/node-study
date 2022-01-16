const mongoose = require('mongoose');
const validator=require ("validator");

const userSchema= new mongoose.Schema({
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

userSchema.pre("save",async function(next){
    const user=this
    console.log("Hi")
    next;
})

const Users=mongoose.model("Users",userSchema);

module.exports=Users;