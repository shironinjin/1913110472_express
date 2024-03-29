const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

//สร้างScheme
const schema = new Schema(
  {
    name: { type: String, require: true, Trim: true },
    email: {
      type: String,
      require: true,
      Trim: true,
      unique: true,
      index: true,
    },
    password: { type: String, require: true, trim: true, minlength: 5 },
    role: { type: String, default: "member" },
  },
  { collection: "users" }
);

schema.methods.encryptPassword = async function (password) {
  const salt = await bcrypt.genSalt(5);
  const hashpassword = await bcrypt.hash(password, salt);
  return hashpassword;
};

schema.methods.checkPassword = async function (password) {
  const isValid = await bcrypt.compare(password, this.password);
  return isValid;
};
const user = mongoose.model("User", schema);

module.exports = user;
