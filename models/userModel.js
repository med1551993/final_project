const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  photo_url: { 
    type: String, 
  },
  address: { 
    type: String, 
    required: true,
  },
  voyages: [{}],
  réservations: [{}],
});

const User = mongoose.model("user", userSchema);
module.exports = User;
