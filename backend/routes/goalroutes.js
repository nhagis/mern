const express = require("express");
const {
  getGoals,
  setGoals,
  putGoals,
  deleteGoals,
} = require("../controllers/goalController");

const router = express.Router();

router.route("/").get(getGoals).post(setGoals);

router.route("/:id").put(putGoals).delete(deleteGoals);

// router.get("/", getGoals);

// router.post("/", setGoals);

// router.put("/:id", putGoals);

// router.delete("/:id", deleteGoals);

module.exports = router;
