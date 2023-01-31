const { Schema, model } = require("mongoose");

// Schema to create Sour Candy model
const surveySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      max_length: 50,
    },
    type: {
      type: String,
      required: true,
      max_length: 50,
    },
    texture: {
      type: Number,
      required: true,
    },
    look: {
      type: Number,
      required: true,
    },
    smell: {
      type: Number,
      required: true,
    },
    taste: {
      type: Number,
      required: true,
    },
    overall: {
      type: Number,
      required: true,
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Survey = model("survey", surveySchema);

module.exports = Survey;
