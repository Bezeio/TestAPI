const express = require('express');
const app = express();
//const express = require('express')
//const { execPath } = require('process')
const router = express.Router()

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


router.get('/', (req, res) => {

    res.json({
        msg: "You requested to user handle",
        num: 16
    })

})

module.exports = router