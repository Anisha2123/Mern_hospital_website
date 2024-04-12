

// const mongoose=require("mongoose");
// mongoose.connect("mongodb://localhost:27017/react-login-tut")
// .then(() =>{
//     console.log("mongodb connected");
// })
// .catch(() =>{   
//     console.log("failed");
// })

//db.js

const mongoose = require('mongoose')

const url = `mongodb+srv://21051630:7OVK3Wm5C1RGIMRZ@cluster0.bleq7uc.mongodb.net/`;

const connectionParams={
    // useNewUrlParser: true,
    // useCreateIndex: true,
    // useUnifiedTopology: true 
}
mongoose.connect(url,connectionParams)
    .then( () => {
        console.log('Connected to the database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. n${err}`);
    })

    
const newSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{

        type:String,
        required:true
    }
})

const collection=mongoose.model("collection",newSchema)

module.exports=collection


// password
// 7OVK3Wm5C1RGIMRZ
// ip address
// 157.41.228.176)
// username
// 21051630