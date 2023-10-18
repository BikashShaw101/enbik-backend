import User from "../models/User";

export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // check whether the user is exists or not
    let user = await User.findOne({ email });

    if (user) {
      return res
        .status(400)
        .json({ message: "The User is already registered" });
    }

    // creating a new user

    user = await User.create({
      name,
      email,
      password,
    });

    return res.status(201).json({
      _id: user._id,
      avatar: user.avatar,
      name: user.name,
      email: user.email,
      verified: user.verified,
      admin: user.admin,
      token: await user.generateJWT(),
    });
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};

export { registerUser };