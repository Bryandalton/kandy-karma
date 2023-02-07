const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, "Must use a valid email address"],
    },
    password: {
      type: String,
      required: true,
    },
    // set reviewedCandies to be an array of data that adheres to the
    reviewedCandies: [
      {
        type: Schema.Types.ObjectId,
        ref: "candy",
      },
    ],
    // Admin or Super User vs Regular User where there is an admin property with a default value of false
    // admin: {
    //   type: Boolean,
    //   required: true,
    //   default: false,
    // },
  },
  // set this to use virtual below
  {
    toJSON: {
      virtuals: true,
    },
  }
);

// hash user password
userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// custom method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

// when we query a user, we'll also get another field called `bookCount` with the number of saved books we have
userSchema.virtual("candyCount").get(function () {
  return this.reviewedCandies.length;
});

const User = model("User", userSchema);

module.exports = User;
