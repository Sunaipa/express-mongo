const express = require('express');

const User = require('../models/user-model');

const router = express.Router();

const userData = {
    userName: "Bobrico",
    userPass: "202r1c0",
    login: "bob_Brico",
    createdAt: new Date,
    roles: ['user', 'log']
}

router.get('/', async (req,res) => {
    res.status(200).json({
        data: await User.find()
    });
});

router.get('/search', async (req, res) => {
    res.status(200).json({
        data: await User.find(req.query)
    })
})

router.get('/:id', async (req,res) => {
    res.status(200).json({
        data: await User.findById(req.params.id)
    })
})


router.get('/new', async (req, res) => {
    try {
        const user = new User(userData);

        const result = await user.save()

        res.json(result)
    } catch (error) {
        res.json(error);
    }
});

router.post('/add', async (req, res) => {
    try {
        const user = new User(userData);
                                
        const result = await user.save()

        res.json(result)
    } catch (error) {
        res.json(error);
    }
});


module.exports = router;