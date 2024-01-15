const User = require("../model/users");

exports.Register = (req, res) => {
  console.log(req.body);
  console.log(req.body);
  var personInfo = req.body;


  if (!personInfo.email || !personInfo.password) {
    res.send();
  } else {


    User.findOne({ email: personInfo.email }, function (err, data) {
      if (!data) {
        var c;
        User.findOne({}, function (err, data) {



          var newPerson = new User({

            email: personInfo.email,
            password: personInfo.password
          });

          newPerson.save(function (err, Person) {
            if (err)
              console.log(err);
            else
              console.log('Success');
          });

        }).sort({ _id: -1 }).limit(1);
        res.send({ "Success": "You are regestered,You can login now." });
      } else {
        res.send({ "Success": "Email is already used." });
      }

    });

  }
};
exports.Login = (req, res) => {
  User.findOne({ email: req.body.email }, function (err, data) {
    if (data) {

      if (data.password == req.body.password) {
        //console.log("Done Login");


        res.send({ "Success": "Success!" });

      } else {
        res.send({ "Success": "Wrong password!" });
      }
    } else {
      res.send({ "Success": "This Email Is not regestered!" });
    }
  });
};
