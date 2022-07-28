const mongoose = require("mongoose");
const User = require("../models/userModel");

const voyageSchema = mongoose.Schema({
  Départ: String,
  Destination: String,
  date: { type: String, required: true },
  heure: { type: String, required: true },
  place: { type: Number, required: true },
  price: { type: Number, required: true },
  fumeur: { type: String, default: "off" },
  musique: { type: String, default: "off" },
  climatiseur: { type: String, default: "off" },
  baggage: { type: String, default: "off" },
  createdBy: [{}],
});

const Voyage = mongoose.model("voyage", voyageSchema);
module.exports = Voyage;
