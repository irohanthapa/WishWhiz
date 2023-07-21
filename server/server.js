const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const color = require('colors')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const errorHandler = require('./middlewares/errorMiddleware')

//routes path
const authRoutes = require('./routes/authRoutes')
const openaiRoutes = require('./routes/openaiRoutes')


//dotenv
dotenv.config()

//mongo connection
connectDB();

//rest object
const app = express()

//middleware
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(morgan('dev'))
app.use(errorHandler);

const PORT = process.env.PORT || 8080

//API routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/openai", openaiRoutes);

//listen server
app.listen(PORT, () => {
    console.log(`Server running in ${process.env.DEV_MODE} mode on port ${PORT}`.yellow.bold)
})