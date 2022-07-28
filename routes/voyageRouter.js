const express = require("express");
const voyage = require("../models/voyageModel");
const voyageRouter = express.Router();

//CREATE voyage
voyageRouter.post("/create", async (req, res) => {
  const { Départ, Destination, date, heure, place, price, fumeur, musique, climatiseur, baggage, createdBy, time} = req.body;
  try {
    const newvoyage = new voyage({
         Départ,
         Destination,
         date,
         heure,
         place,
         price,
         fumeur, 
         musique,
         climatiseur,
         baggage,
         createdBy,
    });
    let result = await newvoyage.save();
    res.send({ voyage: result, msg: "voyage is added.." });
  } catch (error) {
    res.status(400).send({ msg: "can not add" });
    console.log(error);
  }
});

// GET voyage
voyageRouter.get("/getvoyage", async (req, res) => {
  try {
    const result = await voyage.find();
    res.status(200).send({voyages: result, msg: "voyages List" });
  } catch (error) {
    res.status(400).send({ msg: "can not get" });

    console.log(error);
  }
});

// UPDATE voyage
voyageRouter.put("/:id", async (req, res) => {
  try {
    const result = await voyage.findOneAndUpdate({_id:req.params.id},{$set:{...req.body}})
    res.send({ updatevoyage: result, msg: "updated successfully" });
  } catch (error) {
    res.status(400).send({ msg: "can not update" });
    console.log(error);
  }
});

//DELETE voyage
voyageRouter.delete("/:id", async (req, res) => {
  try {
    await voyage.findOneAndDelete({ _id: req.params.id });
    res.send({ msg: "delete successfuly" });
  } catch (error) {
    res.status(400).send({ msg: "can not delete" });
    console.log(error);
  }
});


module.exports = voyageRouter;