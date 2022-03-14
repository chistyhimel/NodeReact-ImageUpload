exports.upload = (req, res) => {
  console.log(req.file);
  res.status(200).json({
    success: "sucess",
  });
};
