exports.company = (req, res, next) => {
  res.status(200).json({
    data: [
      {
        id: 1,
        name: "fcc services",
        address: {
          province: "bangkok",
          postcode: "10310",
        },
      },
      {
        id: 2,
        name: "บริษัท จีโอเอฟเอ็กซ์ (ประเทศไทย) จำกัด",
        address: {
          province: "bangkok",
          postcode: "10310",
        },
      },
      {
        id: 3,
        name: "ไอบีเอ็ม ประเทศไทย จำกัด",
        address: {
          province: "bangkok",
          postcode: "10400",
        },
      },

    ],
  });
};
