import express from "express";
import userRoutes from "./routes/user-routes.js";
import hotelRoutes from "./routes/hotel-routes.js";
import bookingRoutes from "./routes/booking-routes.js";

const app = express();
app.use(express.json());

// User routes
app.use("/user", userRoutes);

// Hotel routes
app.use("/hotels", hotelRoutes);

// Booking routes
app.use("/booking", bookingRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
