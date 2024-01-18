import { createAdmin } from "../controllers/adminController.js";

import express from "express";

const router = express.Router();

// create route
router.post("/createAdmin", createAdmin);

export default router;
