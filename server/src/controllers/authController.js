const {User} = require('../models')

module.exports = {
    // register (req,res) {
    //     res.send({
    //         message:`Hello ${req.body.email}!`
    //     })
    // }
    async register (req, res) {
        try {
            const user = await User.create(req.body)
            res.send(user.toJSON())
            console.log('data loaded into database')
        } catch (err) {
            //email already exists
            res.status(400).send({
            error: 'This email account already exists!'
            })
        }
    }
}