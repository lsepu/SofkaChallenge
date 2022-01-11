const userCtrl = {};

const User = require("../models/User");

userCtrl.getUser = async (req, res) => {
  const user = await User.findOne({ userName: req.params.name });
  res.json(user);
};

userCtrl.createUser = async (req, res) => {
  const newUser = new User(req.body);
  await newUser.save();
  res.send({ message: "Player created" });
};

userCtrl.updateUser = async (req, res) => {
    const filter = { userName: req.params.name };
    const update =  req.body;
    await User.findOneAndUpdate( filter, update );
    res.json({status: 'player points updated'})
};

userCtrl.getRanking = async (req, res) => {
  const userArray = await User.find().sort({points: -1});
  //get first five positions
  const ranking = userArray.slice(0, 5);
  res.send(ranking);
};

module.exports = userCtrl;
