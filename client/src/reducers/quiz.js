import {
    FETCH_ALL_QUIZZES,
    FETCH_PUBLIC_QUIZZES,
    FETCH_TEACHER_QUIZZES,
    CREATE_QUIZ,
    DELETE_QUIZ,
    UPDATE_QUIZ,
    LIKE_QUIZ,
    FETCH_QUIZ,
    FETCH_QUIZZES_BY_SEARCH,
    START_LOADING,
    END_LOADING,
    COMMENT_QUIZ,
} from "../constants/actionTypes"

const reducer = (state = { isLoading: true, quizzes: [] }, action) => {
    switch (action.type) {
        case START_LOADING:
            return { ...state, isLoading: true }
        case END_LOADING:
            return { ...state, isLoading: false }
        case FETCH_PUBLIC_QUIZZES:
            return {
                ...state,
                quizzes: action.payload.data,
                currentPage: action.payload.currentPage,
                numberOfPages: action.payload.numberOfPages,
            }
        case FETCH_ALL_QUIZZES:
        case FETCH_TEACHER_QUIZZES:
        case FETCH_QUIZZES_BY_SEARCH:
            return { ...state, quizzes: action.payload }
        case CREATE_QUIZ:
            return { ...state, quizzes: [...state.quizzes, action.payload] }
        case UPDATE_QUIZ:
        case LIKE_QUIZ:
            return {
                ...state,
                quizzes: state.quizzes.map((quiz) =>
                    quiz._id === action.payload._id ? action.payload : quiz
                ),
            }
        case COMMENT_QUIZ:
            return {
                ...state,
                quizzes: state.quizzes.map((quiz) => {
                    if (quiz._id === action.payload._id) {
                        return action.payload
                    }
                    return quiz
                }),
            }
        case DELETE_QUIZ:
            return {
                ...state,
                quizzes: state.quizzes.filter((quiz) => quiz._id !== action.payload),
            }
        case FETCH_QUIZ:
            return { ...state, quiz: action.payload.quiz }
        default:
            return state
    }
}

export default reducer
