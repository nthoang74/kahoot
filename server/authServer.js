import "dotenv/config"
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import authRouter from "./routes/auth.route.js";

const app = express();

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
//mongoose.connect(process.env.DATABASE_URL);

const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to database"));


app.use(express.json());
app.use(cors())


app.use("/api/auth", authRouter);

app.listen(process.env.AUTH_PORT, () =>
    console.log(`AuthServer started on port ${process.env.AUTH_PORT}`)
);
