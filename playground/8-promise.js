const add=(a,b)=>{
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res(a+b)
        },2000)
    })
}

// add(1,2).then((x)=>{
//     console.log(x)
//     add(x,5).then((sum)=>{
//         console.log(sum)
//     }).catch((e)=>{
//         console.log(e)
//     })

// }).catch((err)=>{
//     console.log(err)
// })

add(1,1).then((sum1)=>{
    console.log(sum1)
    return add(sum1,2)
}).then((sum2)=>{
    console.log("On the rockssss!!!!!!!!!!")
}).catch((e)=>{
    console.log("fireee")
})