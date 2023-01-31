const { Schema, model } = require("mongoose");
const sourSchema = require("./Sour");
const chocolateSchema = require("./Chocolate");
const fruitySchema = require("./Fruity");

const candySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      max_length: 50,
    },
    sour: [sourSchema],
    chocolate: [chocolateSchema],
    fruity: [fruitySchema],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Candy = model("candy", candySchema);

module.exports = Candy;
