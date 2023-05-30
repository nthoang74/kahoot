import express from "express";

import {
    createLeaderboard,
    getLeaderboard,
    addPlayerResult,
    updateQuestionLeaderboard,
    updateCurrentLeaderboard,
} from "../controllers/leaderboard.controller.js";

const router = express.Router()

router.route("/").post(createLeaderboard)

router.route("/:leaderboardId/playerresult").patch(addPlayerResult)

router
    .route("/:leaderboardId/questionleaderboard")
    .patch(updateQuestionLeaderboard)

router
    .route("/:leaderboardId/currentleaderboard")
    .patch(updateCurrentLeaderboard)

router.route("/:id").get(getLeaderboard)

export default router;
