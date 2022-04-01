const User = require('../models/User')
const index = (req, res, next) => {
    //Callback way
    User.find({}, (err, users) => {
        if (err) next(err)

        return res.status(200).json({ users })
    })
}
const newUser = (req, res, next) => {
    console.log('req.body content ', req.body)
    const newUser = new User(req.body)
}
module.exports = {
    index,
    newUser
}