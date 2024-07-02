// const mongoose = require('mongoose');
// mongoose.connect("mongodb+srv://toyemox855:xOa1E3JtggIEMGrI@cluster0.8jchcla.mongodb.net/yogi");


const mongoose = require('mongoose');

const connectiondb = async ()=>{
    try{
        const connect = await mongoose.connect("mongodb+srv://toyemox855:xOa1E3JtggIEMGrI@cluster0.8jchcla.mongodb.net/yogi",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
        );
        console.log("Database connected");

    }catch(error){
        console.error("Error connecting to the database:", error.message);
    }
};
// main();
module.exports = {connectiondb};