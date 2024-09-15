const express = require('express');
const router = express.Router();
const User = require('../models/Architect.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const upload = require('../middleware/upload.js');
const jwtSecret = "my name is x";
const { body, validationResult } = require('express-validator');

// Route to create a new architect
router.post("/createarchitect", upload.single('avatar'), [
    body('email').isEmail(),
    body('name').isLength({ min: 5 }),
    body('password', 'incorrect password').isLength({ min: 5 })
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        // Check if the email already exists in the database
        let existingUser = await User.findOne({ email: req.body.email });
        if (existingUser) {
            return res.status(400).json({ error: "Email already in use" });
        }

        // Generate a hashed password
        const salt = await bcrypt.genSalt(10);
        const secPassword = await bcrypt.hash(req.body.password, salt);

        // Check if a file was uploaded
        const file = req.file ? req.file.path : ''; 

        // Create a new user
        await User.create({
            name: req.body.name,
            password: secPassword,
            email: req.body.email,
            location: req.body.location,
            experience: req.body.experience,
            avatar: file,  // Save file path in database
            projectName: req.body.projectName,
            awards: req.body.awards,
            education: req.body.education,
            projectLink: req.body.projectLink,
        });

        // Respond with success
        res.json({ success: true });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, error: "Server error" });
    }
});

// Route for login
router.post("/loginarchitect", [
    body('email').isEmail(),
    body('password', 'incorrect password').isLength({ min: 5 })
], async (req, res) => {
    const email = req.body.email;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const userData = await User.findOne({ email });
        if (!userData) {
            return res.status(400).json({ errors: "Try logging in with correct credentials" });
        }

        const pwdCompare = await bcrypt.compare(req.body.password, userData.password);
        if (!pwdCompare) {
            return res.status(400).json({ errors: "Try logging in with correct credentials" });
        }

        const data = {
            user: {
                id: userData.id
            }
        };
        const authToken = jwt.sign(data, jwtSecret);
        return res.json({ success: true, authToken: authToken });

    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, error: "Server error" });
    }
});

// Route to fetch architect details by email
router.get('/architect', async (req, res) => {
    const email = req.query.email; // Get email from query parameters
    try {
        const architect = await User.findOne({ email });
        if (!architect) {
            return res.status(404).json({ error: 'Architect not found' });
        }
        res.json(architect);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
});

router.get('/allarchitects', async (req, res) => {
    try {
        const architects = await User.find({}); // Fetch all architects
        res.json(architects);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
});



module.exports = router;
