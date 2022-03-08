const express = require("express");
const {
  registerUser,
  loginUser,
  getme,
} = require("../controllers/userController");
const router = express.Router();

router.post("/registration", registerUser);
router.post("/login", loginUser);
router.post("/me", getme);

module.exports = router;
