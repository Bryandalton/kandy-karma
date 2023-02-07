const { User, Candy, Survey } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");
const resolvers = {
  // setup me Query to parallell MERN books assignment
  Query: {
    users: async () => {
      return User.find();
    },
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id });
        return userData;
      }
      throw new AuthenticationError("not logged in");
    },
    candies: async (parent, args, context) => {
      const candyData = await Candy.find();
      return candyData;
    },
    candy: async (parent, { candyName }) => {
      return Candy.findOne(candyName);
    },
    surveys: async (parent, { email }) => {
      return Survey.find();
    },
    survey: async (parent, { surveyId }) => {
      return Survey.findOne({ _id: surveyId });
    },
  },

  Mutation: {
    addUser: async (parent, { email, password, username }) => {
      const user = await User.create({ email, password, username });
      const token = signToken(user);

      return { token, user };
    },

    login: async (parent, { username, password }) => {
      const user = await User.findOne({ username });

      if (!user) {
        throw new AuthenticationError("No user with this name found");
      }

      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError("Incorrect Credentials");
      }

      const token = signToken(user);

      return { token, user };
    },

    updateUser: async (parent, { email }) => {
      const upUser = await User.findOneAndUpdate(email);
      return upUser;
    },
    deleteUser: async (parent, { userId }) => {
      const remUser = await User.remove(
        { _id: userId } //remove user were id === userId?
      );
      return remUser;
    },
    addNewCandy: async (parent, { candy_name }) => {
      const newCandy = await Candy.create({ candy_name });
      return newCandy;
    },
    deleteCandy: async (parent, { _id }) => {
      const remCandy = await Candy.remove({ _id });
      return remCandy;
    },
    addSurvey: async (
      parent,
      { candy_name, username, type, texture, look, smell, taste, overall }
    ) => {
      const survey = await Survey.create({
        candy_name,
        username,
        type,
        texture,
        look,
        smell,
        taste,
        overall,
      });
      //I'm sure this is missing something ask Jamie
      return survey;
    },
  },
};

module.exports = resolvers;
