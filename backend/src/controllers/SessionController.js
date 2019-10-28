const User = require('../models/User');
module.exports = {
    async store(req,res) {
        let {email} = req.body;
        email = JSON.parse(JSON.stringify(email).toLowerCase());
        console.log(email);
        let user = await User.findOne({ email: email });

        if (!user){
            user = await User.create({ email: email});
        }
        return res.json(user);
    }
};