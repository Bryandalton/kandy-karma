const { Schema, model } = require("mongoose");
const surveySchema = require("./Survey");

const candySchema = new Schema(
  {
    candy_name: {
      type: String,
      required: true,
      max_length: 50,
    },
    survey: [surveySchema],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Candy = model("candy", candySchema);

module.exports = Candy;
