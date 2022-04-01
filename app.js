const bodyParser = require('body-parser')
const express = require('express')
const logger = require('morgan')


const userRoute = require('./routes/user')
    //mongoose connect
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://phong282:123@cluster0.k6grv.mongodb.net/Cluster0?retryWrites=true&w=majority', function(err) {
    if (!err) console.log('db connect oke')
    else console.log('false :' + err)
});
const app = express()

//Middlewares
app.use(logger('dev'))
app.use(bodyParser.json)

app.use('/users', userRoute)
    //Routes
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
app.listen(3000, () => console.log(`Server is listening on ` + 3000));