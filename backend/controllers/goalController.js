const asyncHandler = require("express-async-handler");
const Goal = require("../models/goalModel");

const getGoals = asyncHandler(async (req, res) => {
  const goal = await Goal.find();
  res.status(200).json(goal);
  // .json({ message: "Gets Goals" });
});

const setGoals = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error({ message: "Please Add text message" });
  }
  const goal = await Goal.create({
    text: req.body.text,
  });
  res.status(200).json(goal);
  // .json({ message: "Set Goals" });
});

const putGoals = asyncHandler(async (req, res) => {
  // res.status(200).json({ message: `Put Goals ${req.params.id}` });
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    res.status(400);
    throw new Error({ message: "Goal Not Found" });
  }
  const updateGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updateGoal);
});

const deleteGoals = asyncHandler(async (req, res) => {
  // res.status(200).json({ message: `Delete Goals ${req.params.id}` });

  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    res.status(400);
    throw new Error({ message: "Goal Not Found" });
  }
  await Goal.remove();
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getGoals,
  setGoals,
  putGoals,
  deleteGoals,
};
