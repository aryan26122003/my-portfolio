const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    Name:String,
    Email:String,
    Mobile:String,
    Comment:String,
});
// const db2 = mongoose.model("yogi1",productSchema);
// module.exports = mongoose.model("yogi1",productSchema);
// module.exports = { Module };


const mydb1 = mongoose.model("contacts", userSchema);
// if(mydb1){
//     console.log("Module done");
// }

module.exports = {mydb1}