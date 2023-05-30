import express from "express";

import {
    createPlayerResult,
    getPlayerResults,
    getPlayerResult,
    updatePlayerResult,
    deletePlayerResult,
    addAnswer,
    getAnswers,
    getAnswer,
    updateAnswer,
    deleteAnswer,
} from "../controllers/playerResult.controller.js";


const router = express.Router();

router
    .route("/")
    .get(getPlayerResults)
    .post(createPlayerResult);

router
    .route("/:id")
    .get(getPlayerResult)
    .patch(updatePlayerResult)
    .delete(deletePlayerResult);

router
    .route("/:playerResultId/answers")
    .patch(addAnswer)
    .get(getAnswers);

router
    .route("/:playerResultId/answers/:answerId")
    .get(getAnswer)
    .patch(updateAnswer)
    .delete(deleteAnswer);

export default router;
