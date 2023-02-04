const Company = require("../models/company");

exports.company = async (req, res, next) => {
  const company = await Company.find();
  res.status(200).json({
    data: company,
  });
};

exports.insert = async (req, res, next) => {
  const { name, address } = req.body;

  const company = new Company({
    name: name,
    address: address,
  });
  await company.save();

  res.status(200).json({
    maessge: "เพิ่มข้อมูลเรียบร้อยแล้ว",
  });
};

exports.destro = async (req, res,) => {
  try {
    const { id } = req.params;
    const company = await Company.deleteOne({ _id: id,});
    if (company.deleteCount === 0) {
      const error = new Error("ไม่สามารถลบข้อมูลได้");
      error.statusCode = 200;
      throw error;
      //throw new Error("ไม่สามารถลบข้อมูลได้");
    } else {
      res.status(200).json({
        message: "ลบข้อมูลเรียบร้อย",
      });
    }
  } catch (error) {
    next(error)
    // res.status(400).json({
    //   error: {
    //     message: "เกิดข้อผิดพลาด" + error.message,
    //   },
    // });
  }
};
exports.update = async (req, res,) => {
  try {
    const { id } = req.params;
    const { name, address } = req.body;
    const company = await Company.findOne({
      _id: id,
    });
    if (!company) {
      const error = new Error("ไม่พบผู้ใช้งาน");
      error.statusCode = 200;
      throw error;
      //throw new Error("ไม่พบผู้ใช้งาน");
    } else {
      Staff.updateOne({
        name: name,
        address: address,
      });
    }
    res.status(200).json({
      maessge: "แก้ไขข้อมูลเรียบร้อยแล้ว",
    });

  } catch (error) {
   next(error)
  }
};
