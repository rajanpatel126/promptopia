const { Schema, model, models } = require("mongoose");

const userSchema = new Schema({
  email: {
    type: String,
    require: [true, "Email is required"],
    unique: [true, "Email already exits"],
  },
  userName: {
    type: String,
    require: [true, "UserName is require"],
    match: [
      /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
      "Username invalid, it should contain 8-20 alphanumeric letters and be unique!",
    ],
  },
  image: {
    type: String,
  },
});

const User = models.User ||  model("User", userSchema);
export default User;
