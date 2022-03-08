const registerUser = (req, res) => {
  res.status(200).json({ message: "User Registration" });
};

const loginUser = (req, res) => {
  res.status(200).json({ message: "User login" });
};

const getme = (req, res) => {
  res.status(200).json({ message: "User data Display" });
};

module.exports = {
  registerUser,
  loginUser,
  getme,
};
