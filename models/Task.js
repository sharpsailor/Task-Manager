const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "must provide a name"],
    trim: true,
    maxlength: [20, "name cannot be more than 20 characters"],
  },
  completed:{
    type:Boolean,
    default:false
  }
});
module.exports = mongoose.model("Task", TaskSchema);
// Models are responsible for creating and reading data from MongoDb Database. Its a fancy constructor compiled from Schema definations
