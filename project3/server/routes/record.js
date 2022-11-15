const express = require("express");

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /listings.
const recordRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");

// This section will help you get a list of all the records.
recordRoutes.route("/listings").get(async function (req, res) {
  // Get records
  const dbConnect = dbo.getDb();
  dbConnect.collection("universe").find({}).limit(100).toArray(function (err, result) {
    if(err) {
      res.status(400).send("Error fetching listings!");
    } else {
      res.json(result);
    }
  });
});

// This section will help you create a new record.
recordRoutes.route("/listings/record").post(function (req, res) {
  // Insert swipe informations
  const dbConnect = dbo.getDb();
  const matchDocument = {
    last_modified: new Date(),
    N_value: req.body.N,
    O_value: req.body.O,
    Cell_value: req.body.cell,
    Final: -1
  }

  if (req.body.N > 3 && req.body.O > 2) {
    matchDocument.Final = 22
  }

  dbConnect.collection("universe").insertOne(matchDocument, function (err, result) {
    if (err) {
      res.status(400).send("Error inserting one element!");
    } else {
      console.log("Added a new element!");
      res.status(204).send();
    }
  });
});

// This section will help you update a record by id.
recordRoutes.route("/listings/updateLike").post(function (req, res) {
  // Update likes
  const dbConnect = dbo.getDb();
  const listingQuery = { _id: req.body.id};
  const update = {
    $inc: {
      data1: 1,
      data2: 1
    }
  };
  dbConnect.collection("universe").updateOne(listingQuery, update, function (err, _result) {
    if(err) {
      res.status(400).send("Errot update data1!");
    } else {
      console.log("Updated successfully!");
    }
  });
});

// This section will help you delete a record
recordRoutes.route("/listings/delete").delete((req, res) => {
  // Delete documents
  const dbConnect = dbo.getDb();
  const listingQuery = { listing_id: req.body.id};

  dbConnect.collection("test").deleteOne(listingQuery, function (err, _result) {
    if (err) {
      res.status(400).send("Error deleting!");
    } else {
      console/log("Deleted one doocument!");
    }
  });
});

module.exports = recordRoutes;
