const { Schema, model } = require("mongoose");
const Survey = require("./Survey");

const candySchema = new Schema(
  {
    candy_name: {
      type: String,
      required: true,
      max_length: 50,
    },
  },
  
);

const Candy = model("candy", candySchema);

module.exports = Candy;
