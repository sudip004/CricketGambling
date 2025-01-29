const router = require('express').Router();
const { userRegister, userLogin } = require('../controllers/UserController');
const Match = require("../models/matchModel")
// middleware
const { authenticate } = require('../middlewares/AuthUser');

router.post('/register', userRegister);
router.post('/login', userLogin);

// Create Match
router.post('/matchcreate', authenticate, async (req, res) => {
    try {
        const match = new Match({ ...req.body, createdBy: req.user._id });
        await match.save();
        res.status(201).send(match);
    } catch (err) {
        res.status(400).send(err.message);
    }
});

// Update match API
router.patch('/matchupdate/:id', authenticate, async (req, res) => {
    try {
        const matchId = req.params.id;

        // Find and update the match in one step
        const match = await Match.findByIdAndUpdate(
            matchId, 
            req.body, 
            { new: true, runValidators: true }  // ✅ Returns updated document & validates
        );

        if (!match) {
            return res.status(404).send({ message: 'Match not found' });
        }

        res.send(match);
        console.log("Match updated successfully");

    } catch (err) {
        console.log("Server Error:", err);
        res.status(400).send({ message: err.message });
    }
});

// Get Matches
router.get('/findcurrentmatch/:id', authenticate, async (req, res) => {
    try {
        const matchId = req.params.id;
        const matches = await Match.findById(matchId);
        res.send(matches);
    } catch (err) {
        res.status(500).send(err.message);
    }
});



module.exports = router;