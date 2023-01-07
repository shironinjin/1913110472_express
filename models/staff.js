const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//สร้างScheme
const staffSchema = new Schema({
  name: {type:String,require:true,trim:true},
  salary:{type:Number},
  photo: { type: String, default: "nopic.png" },
  created:{type:Date,default:Date.now},
},{collection:"staffs"}); //ใช้เวลาช่ือไม่ตรงกะฐานข้อมูล
                                //ชื่อโมเดล. ชื่อScheme
const staff = mongoose.model("staff",staffSchema);

module.exports = staff;
