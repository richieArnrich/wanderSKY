import express from "express";

import {
  createTour,
  deleteTour,
  getAllTour,
  getSingleTour,
  updateTour,
} from "../controllers/tourController.js";

const router = express.Router();

// create route
router.post("/createTour", createTour);

//update route
router.put("/:id", updateTour);

//delete route
router.delete("/:id", deleteTour);

// get single route
router.get("/:id", getSingleTour);

//get all route
router.get("/", getAllTour);
export default router;
