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

        // Find the match by ID
        const match = await Match.findById(matchId);

        if (!match) {
            return res.status(404).send({ message: 'Match not found' });
        }

        // Check if the match is live and the current user is the creator
        if (match.status === 'live' && String(match.createdBy) !== String(req.user._id)) {
            return res.status(403).send({ message: 'You are not authorized to update this match' });
        }

        // Update the match with the provided fields
        Object.assign(match, req.body);

        await match.save();

        res.send(match);
        console.log("all successfull");
        
    } catch (err) {
        console.log(err);
        
        res.status(400).send({ message: err.message });
    }
});

// Get Matches
router.get('/matches', authenticate, async (req, res) => {
    try {
        const matches = await Match.find({ createdBy: req.user._id });
        res.json(matches);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

module.exports = router;