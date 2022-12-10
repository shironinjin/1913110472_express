const Company = require("../models/company");

exports.company = async (req, res, next) => {
  const company = await Company.find().sort({ _id: -1 });
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
      throw new Error("ไม่สามารถลบข้อมูลได้");
    } else {
      res.status(200).json({
        message: "ลบข้อมูลเรียบร้อย",
      });
    }
  } catch (error) {
    res.status(400).json({
      error: {
        message: "เกิดข้อผิดพลาด" + error.message,
      },
    });
  }
};
exports.update = async (req, res,) => {
  try {
    const { id } = req.params;
    const { name, address } = req.body;
    const company = await Company.updateOne(
      { _id: id },
      {
        name: name,
        address: address,
      }
    );
    // await company.save();

    res.status(200).json({
      maessge: "แก้ไขข้อมูลเรียบร้อยแล้ว",
    });

  } catch (error) {
    res.status(400).json({
      error: {
        message: "เกิดข้อผิดพลาด" + error.message,
      },
    });
  }
};
