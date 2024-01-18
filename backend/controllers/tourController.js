import Tour from "../models/Tour.js";

// create new tour
export const createTour = async (req, res) => {
  const newTour = new Tour(req.body);
  try {
    const savedTour = await newTour.save();
    res.status(200).json({
      success: true,
      message: "Successfully created",
      data: savedTour,
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Failed to create", data: err });
  }
};

export const deleteTour = async (req, res) => {
  const id = req.params.id;
  try {
    const deletedTour = await Tour.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "deleted successfully",
      data: deletedTour,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Could not delete tour",
    });
  }
};
export const updateTour = async (req, res) => {
  const id = req.params.id;
  try {
    const updatedTour = await Tour.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "updated successfully",
      data: updatedTour,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Could not update tour",
    });
  }
};

export const getSingleTour = async (req, res) => {
  const id = req.params.id;
  try {
    const singletour = await Tour.findById(id);
    res.status(200).json({
      success: true,
      message: "retrieve success",
      data: singletour,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "data not found",
    });
  }
};

export const getAllTour = async (req, res) => {
  const page = parseInt(req.query.page);
  console.log(page);
  try {
    const allTours = await Tour.find({});

    res.status(200).json({
      success: true,
      data: allTours,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "data not found",
    });
  }
};
