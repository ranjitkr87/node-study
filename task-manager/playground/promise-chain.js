require("../src/db/mongoose");
const User=require("../src/models/user");

// User.findByIdAndUpdate("61d5dece4c12afb954a06340",{age:1}).then((user)=>{
//     console.log(user);
//     return User.countDocuments({age:1})

// }).then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//     console.log(err)
// })

const updateAgeAndCount=async(id,age)=>{
    const user=await User.findByIdAndUpdate(id,{age});
    const count=await User.countDocuments({age})
    return count;
}

updateAgeAndCount("61d401bdc10f4afae459feca",3).then((count)=>{
    console.log(count)
}).catch((err)=>{
    console.log(err)

})