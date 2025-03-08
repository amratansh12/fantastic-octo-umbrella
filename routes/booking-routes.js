import { Router } from "express";
import {
  createBooking,
  getBookingsByUserId,
} from "../controllers/booking-controllers.js";

const router = Router();

router.get("/:userId", getBookingsByUserId);
router.post("/create", createBooking);

export default router;
