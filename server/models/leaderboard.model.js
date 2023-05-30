import mongoose from "mongoose";

const leaderBoardSchema = new mongoose.Schema({
    gameId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Game",
    },
    playerResultList: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "PlayerResult",
        },
    ],
    questionLeaderboard: [
        {
            questionIndex: { type: Number },
            questionResultList: [
                {
                    playerId: {
                        type: mongoose.Schema.Types.ObjectId,
                        ref: "User",
                    },
                    playerPoints: { type: Number },
                },
            ],
        },
    ],
    currentLeaderboard: [
        {
            questionIndex: { type: Number },
            leaderboardList: [
                {
                    playerId: {
                        type: mongoose.Schema.Types.ObjectId,
                        ref: "User",
                    },
                    playerCurrentScore: { type: Number },
                },
            ],
        },
    ],
})

export default mongoose.model("Leaderboard", leaderBoardSchema);

