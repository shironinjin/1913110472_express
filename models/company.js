const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//สร้างScheme
const companySchema = new Schema({
  name: String, // String is shorthand for {type: String}
  address: {
    provice: String,
  },
},{collection:"companys"}); //ใช้เวลาช่ือไม่ตรงกะฐานข้อมูล
                                //ชื่อโมเดล. ชื่อScheme
const company = mongoose.model("Companys",companySchema);

module.exports = company
