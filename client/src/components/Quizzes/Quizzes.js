import React, { useState } from "react"
import Quiz from "./Quiz/Quiz"
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useLocation } from "react-router-dom"
import styles from "./quizzes.module.css"
import ChipInput from "material-ui-chip-input"
import {
    AppBar,
    TextField,
    Button,
    Paper,
    CircularProgress,
} from "@material-ui/core"
import useStyles from "./styles"
import { getQuizzesBySearch } from "../../actions/quiz"
import Pagination from "../Pagination/Pagination"

function useQuery() {
    return new URLSearchParams(useLocation().search)
}

function Quizzes() {
    const classes = useStyles()
    const dispatch = useDispatch()
    const history = useHistory()
    const { quizzes, isLoading } = useSelector((state) => state.quiz)
    const isLanguageEnglish = useSelector((state) => state.language.isEnglish)

    const query = useQuery()
    const page = query.get("page") || 1
    const searchQuery = query.get("searchQuery")

    const [search, setSearch] = useState("")
    const [tags, setTags] = useState([])

    const searchPost = () => {
        if (search.trim() !== "" || tags.length !== 0) {
            console.log(search.trim())
            dispatch(getQuizzesBySearch({ search, tags: tags.join(",") }))
            history.push(
                `/quizzes/search?searchQuery=${search || "none"}&tags=${tags.join(",")}`
            )
        } else {
            history.push("/quizzes")
        }
    }

    const handleKeyPress = (e) => {
        if (e.keyCode === 13) {
            searchPost()
        }
    }

    const handleAddChip = (tag) => setTags([...tags, tag])

    const handleDeleteChip = (chipToDelete) =>
        setTags(tags.filter((tag) => tag !== chipToDelete))

    return (
        <div className={styles["quizzes-list"]}>
            <AppBar
                className={classes.appBarSearch}
                position="static"
                color="inherit"
            >
                <TextField
                    onKeyDown={handleKeyPress}
                    name="search"
                    variant="outlined"
                    label={
                        isLanguageEnglish
                            ? "Search quizzes by name"
                            : "Szukaj quizów po nazwie"
                    }
                    fullWidth
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <ChipInput
                    style={{ margin: "10px 0" }}
                    value={tags}
                    onAdd={(chip) => handleAddChip(chip)}
                    onDelete={(chip) => handleDeleteChip(chip)}
                    label={
                        isLanguageEnglish
                            ? "Search quizzes by tags"
                            : "Szukaj quizów po kategoriach"
                    }
                    variant="outlined"
                />
                <Button
                    onClick={searchPost}
                    className={classes.searchButton}
                    variant="contained"
                    color="primary"
                >
                    {isLanguageEnglish ? "Search" : "Szukaj"}
                </Button>
            </AppBar>
            {isLoading ? (
                <CircularProgress />
            ) : (
                quizzes.map((quiz) => <Quiz key={quiz._id} quiz={quiz} />)
            )}
            {!searchQuery && !tags.length && (
                <Paper className={classes.pagination} elevation={6}>
                    <Pagination page={page} />
                </Paper>
            )}
        </div>
    )
}

export default Quizzes
