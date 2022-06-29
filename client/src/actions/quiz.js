import * as api from "../api"
import {
    FETCH_ALL_QUIZZES,
    FETCH_PUBLIC_QUIZZES,
    FETCH_TEACHER_QUIZZES,
    CREATE_QUIZ,
    UPDATE_QUIZ,
    LIKE_QUIZ,
    DELETE_QUIZ,
    FETCH_QUIZ,
    FETCH_QUIZZES_BY_SEARCH,
    START_LOADING,
    END_LOADING,
    COMMENT_QUIZ
} from "../constants/actionTypes"

export const getQuizzes = () => async (dispatch) => {
    try {
        const { data } = await api.fetchQuizzes()
        dispatch({ type: FETCH_ALL_QUIZZES, payload: data })
    } catch (error) {
        console.log(error)
    }
}

export const getPublicQuizzes = (page) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING })
        const {
            data: { data, currentPage, numberOfPages },
        } = await api.fetchPublicQuizzes(page)
        dispatch({
            type: FETCH_PUBLIC_QUIZZES,
            payload: { data, currentPage, numberOfPages },
        })
        dispatch({ type: END_LOADING })
    } catch (error) {
        console.log(error)
    }
}

export const getQuizzesBySearch = (searchQuery) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING })
        const { data } = await api.fetchQuizzesBySearch(searchQuery)
        dispatch({ type: FETCH_QUIZZES_BY_SEARCH, payload: data })
        dispatch({ type: END_LOADING })
    } catch (error) {
        console.log(error)
    }
}

export const getTeacherQuizzes = (id) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING })
        const { data } = await api.fetchTeacherQuizzes(id)
        dispatch({ type: FETCH_TEACHER_QUIZZES, payload: data })
        dispatch({ type: END_LOADING })
    } catch (error) {
        console.log(error)
    }
}

export const getQuestions = () => async (dispatch) => {
    try {
        const { data } = await api.fetchQuestions()
        dispatch({ type: FETCH_ALL_QUIZZES, payload: data })
    } catch (error) {
        console.log(error)
    }
}

export const createQuiz = (quiz, history) => async (dispatch) => {
    try {
        const { data } = await api.createQuiz(quiz)
        dispatch({ type: CREATE_QUIZ, payload: data })
        history.push(`/myquizzes/${data._id}`)
    } catch (error) {
        console.log(error)
    }
}

export const deleteQuiz = (id) => async (dispatch) => {
    try {
        await api.deleteQuiz(id)
        dispatch({ type: DELETE_QUIZ, payload: id })
    } catch (error) {
        console.log(error)
    }
}


export const updateQuiz = (id, quiz) => async (dispatch) => {
    try {
        const { data } = await api.updateQuiz(id, quiz)
        dispatch({ type: UPDATE_QUIZ, payload: data })
    } catch (error) {
        console.log(error)
    }
}


export const likeQuiz = (quizId) => async (dispatch) => {
    try {
        const { data } = await api.likeQuiz(quizId)
        dispatch({ type: LIKE_QUIZ, payload: data })
    } catch (error) {
        console.log(error)
    }
}

export const getQuiz = (id) => async (dispatch) => {
    try {
        const { data } = await api.fetchQuiz(id)
        dispatch({ type: FETCH_QUIZ, payload: { quiz: data } })
    } catch (error) {
        console.log(error)
    }
}

export const commentQuiz = (comment, quizId) => async (dispatch) => {
    try {
        const { data } = await api.commentQuiz(comment, quizId)
        dispatch({ type: COMMENT_QUIZ, payload: data })
        return data.comments
    } catch (error) {
        console.log(error)
    }
}
