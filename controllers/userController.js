const User = require('../models/User');

const getUserProfile = async (req, res) => {
  const userId = req.user.userId;
  try {
    const user = await User.findById(userId).select('-password');
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateUserProfile = async (req, res) => {
  const userId = req.user.userId;
  const { username, email } = req.body;
  try {
    const user = await User.findByIdAndUpdate(userId, { username, email }, { new: true }).select('-password');
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = { getUserProfile, updateUserProfile };
