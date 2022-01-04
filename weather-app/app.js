const request=require("request");


// const url="http://api.weatherstack.com/current?access_key=e45c71f3021f69791b42b3bc6367e15d&query=37.8267,-122.4233&units=f";


// request({url:url,json:true},(error,response) =>{

//     if(error){
//         console.log("check network connection");
//     }
//     else if(response.body.error){
//         console.log("Enter valid details");
//     }
//     else{
//         console.log("Location is "+response.body.location.region);
//     }
// })

// const url4Map="https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoicmFuaml0a3I4NyIsImEiOiJja3dleXFxZ3EwOW94Mm9udWo2aGRibDg3In0.gukOq32SPFy07rR5TrYliw&limit=1";

// request({url:url4Map,json:true},(error,response) =>{

//     if(error){
//         console.log("check network connection");
//     }
//     else if(response.body.error){
//         console.log("Enter valid details");
//     }
//     else{
//         console.log("latitude is "+response.body.features[0].center[0]+" and longitude is "+response.body.features[0].center[1]);

//     }
// })

const geoCode=(address, callback)=>{
    const url="https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent(address)+"?access_token=pk.eyJ1IjoicmFuaml0a3I4NyIsImEiOiJja3dleXFxZ3EwOW94Mm9udWo2aGRibDg3In0.gukOq32SPFy07rR5TrYliw&limit=1"
    request({url:url, json:true},(error,response)=>{
        if (error){
            callback("Check Network");
        }
        else if(response.body.features.length==0){
            callback("Enter proper values")
        }
        else{
            callback(undefined, )
        }
    })   
}

geoCode("Philadelphia", (error,data)=>{
    console.log("Error",error);
    console.log("data", data)
})
