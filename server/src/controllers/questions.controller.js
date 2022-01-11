
const questionCtrl = {};

const Question = require("../models/Question");

questionCtrl.getQuestion = async (req, res) => {
  const questionArray = await Question.find({category: req.params.cat});
  //get random question
  const randQuestion = questionArray[Math.floor(Math.random() * questionArray.length)];
  res.json(randQuestion);
};

questionCtrl.createQuestion = async (req, res) => {
  const newQuestion = new Question(req.body);
  await newQuestion.save();
  res.send({ message: "Question created" });
};

module.exports = questionCtrl;
