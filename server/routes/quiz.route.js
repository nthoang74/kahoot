import express from "express";

import {
    createQuiz,
    getQuizzes,
    getPublicQuizzes,
    getQuizzesBySearch,
    getTeacherQuizzes,
    getQuiz,
    updateQuiz,
    deleteQuiz,
    addQuestion,
    getQuestions,
    getQuestion,
    updateQuestion,
    deleteQuestion,
    likeQuiz,
    commentQuiz
} from "../controllers/quiz.controller.js";


const router = express.Router();

router
    .route("/")
    .get(getQuizzes)
    .post(createQuiz);

router.get("/public", getPublicQuizzes)
router.get("/search", getQuizzesBySearch)

router.get("/teacher/:teacherId", getTeacherQuizzes)

router
    .route("/:id")
    .get(getQuiz)
    .patch(updateQuiz)
    .delete(deleteQuiz);

router.patch("/:id/likeQuiz", likeQuiz)
router.post("/:id/commentQuiz", commentQuiz)

router
    .route('/:quizId/questions')
    .post(addQuestion)
    .get(getQuestions);

router
    .route('/:quizId/questions/:questionId')
    .get(getQuestion)
    .patch(updateQuestion)
    .delete(deleteQuestion)

export default router;
