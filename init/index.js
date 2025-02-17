const mongoose = require("mongoose");
const Listing = require("../models/listing.js");
const initData = require("./data.js");

main()
  .then(() => {
    console.log("Connected to DB.");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/travello");
}

const initDB = async () => {
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: "677388c790fcfaefbc502ccb",
  }));
  await Listing.insertMany(initData.data);
  console.log("Data initialised.");
};

initDB();
