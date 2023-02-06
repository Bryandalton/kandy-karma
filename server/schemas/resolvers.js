const { User, Candy, Survey } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");
const resolvers = {
  // setup me Query to parallell MERN books assignment
  Query: {
    users: async () => {
      return User.find()
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
    candy: async (parent, {candyId}) =>{
      return Candy.findOne({_id: candyId})
    },
    surveys: async (parent, {email}) => {
      return  Survey.find()
    },
    survey: async (parent, { surveyId }) => {
      return Survey.findOne({_id: surveyId})
    }
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
    addUser: async (parent, {email, password}) => {
      const newUser = await User.create({email, password});
      const token = signToken(newUser);

      return {token, newUser};
    },

    login: async (parent, {email, password}) => {
      const user = await User.findOne({email});

      if(!user) {throw new AuthenticationError('No user with this email found')}

      const correctPw = await user.isCorrectPassword(password);
       if (!correctPw) {throw new AuthenticationError('Incorrect Credentials')}

      const token = signToken(user);

      return{token, user};
    },

    updateUser: async (parent, args) => {
      const upUser = await User.findOneAndUpdate(args);
      return upUser;
    },
    deleteUser: async (parent, args) => {
      const remUser = await User.remove(
        { _id: userId } //remove user were id === userId?
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
    addSurvey: async (parent, {surveyData}) => {
      const survey = await Survey.create({surveyData})
      //I'm sure this is missing something ask Jamie
      return survey
    }
  },
};

module.exports = resolvers;
