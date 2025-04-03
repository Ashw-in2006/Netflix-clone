import express from "express";
import cookieParser from "cookie-parser";

import authRoutes from "./Routes/auth.route.js";
import movieRoutes from "./Routes/movie.route.js";
import tvRoutes from "./Routes/tv.route.js";
import searchRoutes from "./Routes/search.route.js";

import { ENV_VARS } from "./config/envVars.js";
import { connectDB } from "./config/db.js";
import { protectRoute } from "./middleware/protectRoute.js";

const app = express();

const PORT = ENV_VARS.PORT;

app.use(express.json());    //will allow us to parse req.body as JSON
app.use(cookieParser());

app.use("/api/v1/auth",authRoutes);
app.use("/api/v1/movie",protectRoute, movieRoutes);
app.use("/api/v1/tv",protectRoute, tvRoutes);
app.use("/api/v1/search",protectRoute, searchRoutes);

app.listen(PORT, () => { 
    console.log("server started at http://Localhost:"+PORT);
    connectDB();
});




