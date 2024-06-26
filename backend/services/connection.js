var mongoose = require("mongoose");
var config = require("config");
let tool = require("./tool");

//database connection
mongoose.Promise = global.Promise;
const options = {
  autoIndex: false,
  reconnectTries: 100,
  reconnectInterval: 500,
  poolSize: 10,
  bufferMaxEntries: 0,
  useNewUrlParser: true,
  useFindAndModify: false,
};

mongoose
  .connect("mongodb+srv://adarshprajapati9711:LVOGQryWP5qyClj8@cluster0.yhdlymf.mongodb.net/exam?retryWrites=true&w=majority", options)
  .then(() => {
    console.log("connected to mongoDB");
  })
  .catch((err) => {
    console.log("Error connecting to database", err);
  });

module.exports = mongoose;
