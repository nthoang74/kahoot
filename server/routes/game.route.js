import express from "express";

import {
    createGame,
    getGames,
    getGame,
    updateGame,
    deleteGame,
    addPlayer,
} from "../controllers/game.controller.js";

const router = express.Router()

router
    .route("/")
    .get(getGames)
    .post(createGame)

router
    .route("/:gameId/players")
    .patch(addPlayer)

router
    .route("/:id")
    .get(getGame)
    .patch(updateGame)
    .delete(deleteGame)

export default router;
