exports.index =   (req, res, next) =>{
    res.status(200).json({ fullname: "Jiraporn" });
  }

exports.bio = (req, res, next) => {
    res.status(200).json({
      fullname: "Jiraporn Tubchum",
      nickname: "may",
      nobby: "readbook",
      gitusername: "shironinjin",
    });
  }
  