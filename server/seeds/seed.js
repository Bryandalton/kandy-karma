const { Candy, User, Survey } = require("../models");
const db = require('../config/connection')

const candyData = require("./candyData.json");
const surveyData = require("./surveyData.json");
const userData = require('./userSeeds.json')


db.once('open', async () => {
  await Candy.deleteMany({});
  await User.deleteMany({});

  await User.create(userData);
  await Candy.create(candyData);
  await Survey.create(surveyData);

  console.log('Database Seeded!');
  process.exit(0);
});
