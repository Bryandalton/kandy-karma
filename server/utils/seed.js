const sequelize = require("../config/connection");
const { Candy } = require("../models");

const candyData = require("./candyData.json");
const surveyData = require("./surveyData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Candy.bulkCreate(candyData, {
    individualHooks: true,
    returning: true,
  });

  await Candy.bulkCreate(surveyData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
