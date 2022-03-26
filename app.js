const express = require('express')
const logger = require('morgan')

const app = express()

const userRoute = require('./routes/user')

//Middlewares
app.use(logger('dev'))


app.use('/users', userRoute)

app.get('/', (req, res, next) => {
    return res.status(200).json({
        message: 'Server is OK'
    })
})

//Catch 404 Error
app.use((req, res, next) => {
    const err = new Error('Not found')
    err.status = 404
    next(err)
})

//Error handler function
app.use(() => {
    const error = app.get('env') === 'development' ? err : {}
    const status = err.status || 500

    return res.status(status).json({
        error: {
            message: error.message
        }
    })
})
app.listen(3000, () => console.log(`Server is listening on` + 3000));