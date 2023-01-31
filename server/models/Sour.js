const { Schema, model } = require("mongoose");

// Schema to create Sour Candy model
const sourSchema = new Schema(
  {
    texture: {
      type: String,
      required: true,
      max_length: 50,
    },
    last: {
      type: String,
      required: true,
      max_length: 50,
    },
    github: {
      type: String,
      required: true,
      max_length: 50,
    },
    assignments: [assignmentSchema],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Sour = model("sour", sourSchema);

module.exports = Sour;
