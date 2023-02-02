const { User, Candy } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");
const resolvers = {
  // setup me Query to parallell MERN books assignment
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id });
        return userData;
      }
      throw new AuthenticationError("not logged in");
    },
    candies: async (parent, args, context) => {
      const candyData = await Candy.findAll();
      return candyData;
    },
  },
  //   mutations will get the ones we put in the type mutations, this will model the user ones form in class activities ; then we will do the update and
  Mutation: {
  //   login(): Auth
  //  addUser(): Auth
  //  reviewCandy(): User
  //  addNewCandy(): User X
  //  deleteCandy(): User X
  //  updateUser(): User X
  //  deleteUser(): User X
    addUser: async (parent, args) => {
      const newUser = await User.create(args);
      return newUser;
    },
    updateUser: async (parent, args) => {
      const upUser = await User.findOneAndUpdate(args);
      return upUser;
    },
    deleteUser: async (parent, args) => {
      const remUser = await User.remove(
        { _id }
      );
      return remUser;
    },
    addNewCandy: async (parent, args) => {
      const newCandy = await Candy.create(
        { _id },
        { new: true }
      );
      return newCandy;
    },
    deleteCandy: async (parent, args) => {
      const remCandy = await Candy.remove(
        { _id }
      );
      return remCandy;
    },
  },
};

module.exports = resolvers;
