import Admin from "../models/Admin.js";

export const createAdmin = async (req, res) => {
  const newAdmin = new Admin(req.body);
  try {
    const savedAdmin = await newAdmin.save();
    res.status(200).json({
      success: true,
      message: "Admin successfully created",
      data: savedAdmin,
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Failed to create user", data: err });
  }
};
