import mongoose from "mongoose";

const playerResultStatsSchema = new mongoose.Schema({
    gameId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Game",
    },
    playerResult: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "PlayerResult",
    },
    playerId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    averageTimePerQuestion: {
        type: Number,
    },
    averagePointsPerQuestion: {
        type: Number,
    },
    percentageScoreValue: {
        type: Number,
    },
})

export default mongoose.model("PlayerResultStats", playerResultStatsSchema);
