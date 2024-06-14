
// const express = require("express");
// const app = express();
// const cors = require("cors");
// const bodyParser = require("body-parser");
// const mongoose = require("mongoose");
// const port = process.env.PORT || 5000;
// app.use(cors());
// app.use(express.json());
// app.use(bodyParser.json());

// app.use(express.json());
// app.use(cors());
// //connection
// const main = async() =>{
//     try{
//         const connect = await mongoose.connect("mongodb+srv://toyemox855:xOa1E3JtggIEMGrI@cluster0.8jchcla.mongodb.net/yogi",
//         {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         }
//         );
//         console.log("Connected");
//     }catch(error){
//         console.error("error",error.message);
//     }
// };
// main();

// const Schema = mongoose.Schema;
// //model
// const userSchema = new Schema({
//     Name:String,
//     Email:String,
//     Numbber:String,
//     Comment:String,
// });

// const mydb2  = mongoose.model("yogi1",userSchema);

// app.post("/users",async(req,res)=>{
//     const data = req.body;
//     try{
//         const name = data.name;
//         const email = data.email;
//         const mobile = data.mobile;
//         const comment = data.comment;

//         const storedata = new mydb2({
//             Name:name,
//             Email:email,
//             Mobile:mobile,
//             Comment:comment,
//         });

//         await storedata.save();
//         res.status(200).json({message:"data sended"});
//     }
//     catch{
//         res.status().json({message:"failed"});
//     }
// });

// app.get("/list",async(req,res)=>{
//     let data = await mydb2.find();
//     res.send(data);
    
//     // console.warn(data);
// })

// app.listen(port,()=>{
//     console.log(`server is running on port ${port}`);
// })
