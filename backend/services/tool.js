var UserModel = require("../models/user");
const bcrypt = require("bcrypt");
const saltRounds = 10;

//create admin
var createadmin = () => {
  const password = "Prajapati1@";

  bcrypt
    .hash(password, saltRounds)
    .then((hash) => {
      var tempdata = new UserModel({
        name: "Adarsh",
        password: hash,
        emailid: "adarshprajapati9711@gmail.com",
        contact: "+65 12345678",
        
        type: "ADMIN",
      });

      tempdata
        .save()
        .then(() => console.log("Admin created"))
        .catch((err) => console.log("err1", err));
    })
    .catch((err) => console.log("err2", err));
};

var hashPassword = (password) => {
  return new Promise((resolve, reject) => {
    bcrypt
      .hash(password, saltRounds)
      .then((hash) => resolve(hash))
      .catch((err) => reject(err));
  });
};

module.exports = {
  createadmin,
  hashPassword,
};
