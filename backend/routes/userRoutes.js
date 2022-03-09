const express = require("express");
const {
  registerUser,
  loginUser,
  getme,
} = require("../controllers/userController");
const router = express.Router();

router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/me", getme);

module.exports = router;
