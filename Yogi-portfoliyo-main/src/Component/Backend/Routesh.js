const express = require("express");
const Router = express.Router();
const cors = require('cors');
const app = express();

const { mydb1 } = require("./Module");


//********************************* Contact page *********************************************
//insert ka api
// Define the route for creating users send api
Router.post("/users", async (req, res) => {
    
    try{
        const data = req.body;
        const name = data.name;
        const email = data.email;
        const mobile = data.mobile;
        const comment = data.comment;

        console.log(name)   
        
        const storedata = new mydb1({
            Name:name,
            Email:email,
            Mobile:mobile,
            Comment:comment,
        });

        await storedata.save();
        res.status(200).json({message:"data sended"});
    }
    catch{
        res.status().json({message:"failed"});
    }

});


//fetch contact
Router.get("/fetchdata",async(req,res)=>{
    let data = await mydb1.find();
    res.send(data);
    console.warn(data);
});


//update api (not use but imp)
// Router.put("/update", async(req,res)=>{
//     //select data
//     let data = await mydb1.find();
//     console.warn(data.map((DataEmail,index)=>{
//         // console.warn(DataEmail.Email)
//         allmail = DataEmail.Email;
//         // console.warn(allmail);
        
//         //update time
//     })); 
// });     

Router.put("/update",async(req,res)=>{
    //data comming form frontend
    const data = req.body;
    const email = data.email;
    const name = data.name;
    // const mobile = data.mobile;

    console.warn(email);
    console.warn(name);
    // console.warn(mobile);

   let updateData = await mydb1.updateMany(
    {Email:email},{
        $set:{
            Name:name
        }
    });
    // console.warn(updateData); 
      
    
});

// Delete data 
Router.put("/delete")

// ****************************************** END CONTACT *************************************



module.exports = Router;



