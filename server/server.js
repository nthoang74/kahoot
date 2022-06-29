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


//mongoose.connect(process.env.DATABASE_URL);
// const URL = 'mongodb+srv://mongo-user:<password>@cluster-mongo-test.ieqay.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const URL = 'mongodb+srv://nthoang74:0000@database.wvklh.mongodb.net/?retryWrites=true&w=majority'

const connectDB = async () => {
    try {
        await mongoose.connect(
            URL,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            }
        )

        console.log('Connected to mongoDB')
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}


const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to database"));

app.use(express.json({limit: '5mb'}));
app.use(cors());
app.use(authenticateToken);
//app.use(regenerateAccessToken);


app.use("/api/users", userRouter);
app.use("/api/quizes", quizRouter);
app.use("/api/games", gameRouter);
app.use("/api/playerResults", playerResultRouter);
app.use("/api/leaderboard", leaderboardRouter)

app.listen(process.env.PORT, () =>{
    //console.log(`Server started on port ${process.env.PORT}`);
    console.log(`Server started on mongodb+srv://nthoang74:0000@database.wvklh.mongodb.net`);
    }
);
