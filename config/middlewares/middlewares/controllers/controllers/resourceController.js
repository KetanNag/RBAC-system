exports.adminResource = (req, res) => {
  res.status(200).json({ message: "Welcome, Admin!" });
};

exports.userResource = (req, res) => {
  res.status(200).json({ message: "Welcome, User!" });
};
