const express = require('express');
const { hasUncaughtExceptionCaptureCallback } = require('process');
const app = express();
//const express = require('express')
//const { execPath } = require('process')
const router = express.Router()
const userController = require('../controller/user')
    // router.route
    //     .get((req, res) => {
    //         return res.status(200).json({
    //             message: 'You requested to user handle'
    //         })
    //     })
    //     .post()
    //     .path()
    //     .put()
    //     .delete()


// router.get('/', (req, res) => {

//         res.json({
//             msg: "You requested to user handle",
//             num: 16
//         })

//     })

router.route('/')
    .get(userController.index)
    .post(userController.newUser)
    .patch()
    .put()
    .delete()

module.exports = router