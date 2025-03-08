import { Router } from "express";
import { getHotels, getHotelById } from "../controllers/hotel-controllers.js";

const router = Router();

router.get("/", getHotels);
router.get("/:id", getHotelById);

export default router;
