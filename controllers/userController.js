const db = require('../models'); // Assuming your user model is inside the models directory
const bcrypt = require('bcrypt');

const User = db.user;
//register
const register = async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashed = await bcrypt.hash(req.body.password, salt);
        // New User
        let infos = {
            id: req.body.id,
            name: req.body.name,
            email: req.body.email,
            password: hashed,
        };
        const newUser = await User.create(infos);
        res.status(200).json({message:'Register successfully.'});
        

    } catch (error) {
        res.status(500).send({ error: 'Error saving user' });
        console.error(error);
    }
};
//sign in
const signin = async (req, res) => {
    try {
        const user = await User.findOne({ where: { email: req.body.email } });
        if (!user) {
            return res.status(400).send({ message: 'Wrong email.' });
        }

        const isValid = await bcrypt.compare(req.body.password, user.password);
        if (!isValid) {
            return res.status(400).send({ message: 'Wrong password.' });
        }

        res.status(200).json({ message: 'Sign-in successful'});
    } catch (err) {
        res.status(500).json({ message: 'Unable to sign in' });
        console.error(err);
    }
};

module.exports = { register, signin};

