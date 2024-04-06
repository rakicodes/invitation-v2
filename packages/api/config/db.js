const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      process.env.ENV === "dev"
        ? process.env.DB_DEV_STRING
        : process.env.DB_PROD_STRING,
    );
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDB;
