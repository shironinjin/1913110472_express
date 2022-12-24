const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//สร้างScheme
const schema = new Schema({
    name: {type:String,require:true,trim:true},
    price:{type:Number},
    shop:{type:Schema.Types.ObjectId, ref:'Shop'}

    
},{
    timestamps:true,
    collection:"menus"}); //ใช้เวลาช่ือไม่ตรงกะฐานข้อมูล
                                //ชื่อโมเดล. ชื่อScheme
const menu = mongoose.model("Menu",schema);

module.exports = menu;
