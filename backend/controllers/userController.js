import User from "../models/User.js";

export const createUser = async (req, res) => {
  const newUser = new User(req.body);
  try {
    const savedUser = await newUser.save();
    res.status(200).json({
      success: true,
      message: "user successfully created",
      data: savedUser,
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Failed to create user", data: err });
  }
};
export const loginUser = async (req, res) => {
  try {
    const { UserID, Email, Password } = req.body;
    if (!UserID || !Email || !Password) {
      return res.json(400).json({ error: "Please fill all the fields" });
    }

    const userLogin = await User.findOne({ UserID: UserID });
    if (!userLogin) {
      res.json({ message: "Invalid credentials" });
    } else {
      res.status(200).json({ message: "user login successfully" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: "Failed to login" });
  }
};
export const updateSingleUser = async (req, res) => {
  const id = req.params.id;
  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "user updated successfully",
      data: updatedUser,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Could not update user",
    });
  }
};

export const getSingleUser = async (req, res) => {
  const id = req.params.id;
  try {
    const singleUser = await User.findById(id);
    res.status(200).json({
      success: true,
      message: "retrieve success",
      data: singleUser,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "user not found",
    });
  }
};

export const deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    const deletedUser = await User.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "deleted successfully",
      data: deletedUser,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Could not delete user",
    });
  }
};
