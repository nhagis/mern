const mongoose = require("mongoose");
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please Enter a Name"],
    },
    email: {
      type: String,
      required: [true, "Please Enter an Email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please Enter a Password"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
