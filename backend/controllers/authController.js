const User = require('../models/User');
const bcrypt = require('bcryptjs');

// @desc    Register a new user
// @route   POST /api/auth/signup
exports.signup = async (req, res) => {
  console.log("1. Backend received signup request"); 

  try {
    const { username, email, password } = req.body;

    // Validation
    if (!username || !email || !password) {
      return res.status(400).json({ message: "Please fill in all fields" });
    }

    // Check existing user
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User with this email already exists." });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create User
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();
    console.log("✅ User saved:", savedUser._id);

    res.status(201).json({ 
      message: "User created successfully!", 
      user: { id: savedUser._id, username: savedUser.username, email: savedUser.email } 
    });

  } catch (err) {
    console.error("❌ ERROR:", err.message);
    res.status(500).json({ message: err.message });
  }
};

// @desc    Sign In User
// @route   POST /api/auth/signin
exports.signin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1. Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // 2. Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // 3. Success
    res.json({
      message: "Login successful",
      user: {
        id: user._id,
        username: user.username,
        email: user.email
      },
      token: "dummy-token-for-now" // We will add real JWT later
    });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};