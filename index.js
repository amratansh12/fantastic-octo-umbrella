import express from "express";
import userRoutes from "./routes/user-routes.js";
import hotelRoutes from "./routes/hotel-routes.js";

const app = express();
app.use(express.json());

// User routes
app.use("/user", userRoutes);

// Hotel routes
app.use("/hotels", hotelRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
