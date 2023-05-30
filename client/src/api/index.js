import axios from "axios"

const API = axios.create({ baseURL: "http://localhost:3000/api" })

API.interceptors.request.use((req) => {
    if (localStorage.getItem("profile")) {
        req.headers.Authorization = `Bearer ${
            JSON.parse(localStorage.getItem("profile")).accessToken
        }`
    }
    return req
})

export const fetchUsers = () => API.get("/users")
export const createUser = (newUser) => API.post("/users", newUser)
export const updateUser = (id, updatedUser) =>
    API.patch(`/users/${id}`, updatedUser)
export const deleteUser = (id) => API.delete(`/users/${id}`)

export const fetchQuizzes = () => API.get("/quizzes")
export const fetchPublicQuizzes = (page) =>
    API.get(`/quizzes/public?page=${page}`)
export const fetchQuizzesBySearch = (searchQuery) =>
    API.get(
        `/quizzes/search?searchQuery=${searchQuery.search || "none"}&tags=${
            searchQuery.tags
        }`
    )
export const fetchTeacherQuizzes = (teacherId) =>
    API.get(`/quizzes/teacher/${teacherId}`)
export const fetchQuestions = (quizId) => API.get(`/quizzes/${quizId}`)
export const createQuiz = (newQuiz) => API.post("/quizzes", newQuiz)
export const createQuestion = (quizId, newQuestion) =>
    API.post(`/quizzes/${quizId}/questions`, newQuestion)
export const updateQuestion = (quizId, questionId, updatedQuestion) =>
    API.patch(`/quizzes/${quizId}/questions/${questionId}`, updatedQuestion)
export const updateQuiz = (id, updatedQuiz) =>
    API.patch(`/quizzes/${id}`, updatedQuiz)
export const deleteQuiz = (id) => API.delete(`/quizzes/${id}`)
export const likeQuiz = (id) => API.patch(`/quizzes/${id}/likeQuiz`)
export const commentQuiz = (comment, id) =>
    API.post(`/quizzes/${id}/commentQuiz`, { comment })
export const fetchQuiz = (id) => API.get(`/quizzes/${id}`, id)

export const createGame = (newGame) => API.post("/games", newGame)
export const fetchGame = (id) => API.get(`/games/${id}`, id)
export const addPlayer = (gameId, playerId) =>
    API.patch(`/games/${gameId}/players`, { playerId })

export const createPlayerResult = (newPlayerResult) =>
    API.post("/playerResults", newPlayerResult)
export const fetchPlayerResult = (id) => API.get(`/playerResults/${id}`, id)
export const addAnswer = (newAnswer, id) =>
    API.patch(`/playerResults/${id}/answers`, { newAnswer })

export const createLeaderboard = (newLeaderboard) =>
    API.post("/leaderboard", newLeaderboard)
export const fetchLeaderboard = (id) => API.get(`/leaderboard/${id}`, id)
export const addPlayerResult = (playerResult, id) =>
    API.patch(`/leaderboard/${id}/playerresult`, playerResult)
export const updateQuestionLeaderboard = (questionResult, id) =>
    API.patch(`/leaderboard/${id}/questionleaderboard`, questionResult)
export const updateCurrentLeaderboard = (result, id) =>
    API.patch(`/leaderboard/${id}/currentleaderboard`, result)

const AUTH_API = axios.create({ baseURL: "http://localhost:4000/api/auth" })

export const login = (formData) => AUTH_API.post("/login", formData)
export const register = (formData) => AUTH_API.post("/register", formData)
