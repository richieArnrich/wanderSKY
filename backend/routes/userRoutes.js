import {
  createUser,
  deleteUser,
  getSingleUser,
  loginUser,
  updateSingleUser,
} from "../controllers/userController.js";

import express from "express";

const router = express.Router();

// create route
router.post("/createUser", createUser);

router.post("/loginUser", loginUser);

//update route
router.put("/:id", updateSingleUser);

//delete route
router.delete("/:id", deleteUser);

// get single route
router.get("/:id", getSingleUser);

//get all route
// router.get("/", getAllTour);
export default router;
