import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(express.static("public"))
app.use(cookieParser())


//routes import
import student from './routes/student.route.js'
import adminLogin from "./routes/adminLogin.route.js"


//routes declaration

app.use("/api/students", student)
app.use("/api/admin", adminLogin)


export { app }