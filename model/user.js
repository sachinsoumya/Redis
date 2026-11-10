const mongoose = require("mongoose");

const validator = require("validator");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 4,
    maxLength: 50,
  },

  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email is invalid");
      }
    },
  },

  age: {
    type: Number,
    min: 18,
    max: 60,
  },

  address: {
    type: String,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
