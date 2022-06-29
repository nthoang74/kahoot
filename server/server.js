import "dotenv/config"
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();

import  {
    authenticateToken,
    regenerateAccessToken
} from "./middleware/auth.mdw.js";

import userRouter from "./routes/user.route.js";
import quizRouter from "./routes/quiz.route.js";
import gameRouter from "./routes/game.route.js";
import playerResultRouter from "./routes/playerResult.route.js";
import leaderboardRouter from "./routes/leaderboard.route.js";


mongoose.connect(process.env.DATABASE_URL);

const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to database"));

app.use(express.json({limit: '5mb'}));
app.use(cors());
app.use(authenticateToken);
app.use(regenerateAccessToken);


app.use("/api/users", userRouter);
app.use("/api/quizes", quizRouter);
app.use("/api/games", gameRouter);
app.use("/api/playerResults", playerResultRouter);
app.use("/api/leaderboard", leaderboardRouter)


app.listen(process.env.PORT, () =>{
        console.log(`Server started on port ${process.env.PORT}`);
    }
);
