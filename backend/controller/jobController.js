const Job = require("../model/job");

exports.Post = async (req, res) => {
  console.log(req.body);
  const data = req.body;
  await Job.findOne({ email: data.email })
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
};
