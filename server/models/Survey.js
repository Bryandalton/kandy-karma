const { Schema, model } = require("mongoose");

// Schema to create  Candy model
const surveySchema = new Schema(
  {
    candy_name: {
      type: String,
      required: true,
      max_length: 50,
    },
    username: {
      type: String,
      required: true,
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

//does this need to be exported as a model?
const Survey = model("survey", surveySchema)

module.exports = Survey;
