require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const {CLIENT_ORIGIN} = require('./config');
const helmet = require('helmet')
const { NODE_ENV } = require('./config')
const authRouter = require('./auth/auth-router')
const usersRouter = require('./users/users-router')

// const validateBearerToken = require('./validate-bearer-token');

const noteRouter = require('./note/note-router');
const folderRouter = require('./folder/folder-router');
const recipeRouter = require('./recipe/recipe-router');


const app = express()

const morganOption = (NODE_ENV === 'production')
    ? 'tiny'
    : 'common';

app.use(morgan(morganOption))
app.use(cors())
app.use(helmet())
// app.use(validateBearerToken);

app.get('/', (req, res,) => {
    res.send('Hello, world!')
})

app.use('/api/notes', noteRouter);
app.use('/api/folders', folderRouter);
app.use('/api/recipes', recipeRouter)
app.use('/api/auth', authRouter)
app.use('/api/users', usersRouter)

app.use(function errorHandler(error, req, res, next) {
    let response
    if (NODE_ENV === 'production') {
        response = { error: { message: 'server error' } }
    } else {
        console.error(error)
        response = { message: error.message, error }
    }
    res.status(500).json(response)
})

module.exports = app;