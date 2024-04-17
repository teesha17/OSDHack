// const express = require('express');
// const multer = require('multer');
// const path = require('path');
// const fs = require('fs');
// const router = express.Router();
// const User = require('../models/Architect.js')
// const bcrypt=require('bcryptjs')
// const jwt =  require('jsonwebtoken')
// const jwtSecret = "my name is x";
// const { body, validationResult } = require('express-validator');


// router.post("/createarchitect", [
//     body('email').isEmail(),
//     body('name').isLength({ min: 5 }),
//     body('password', 'incorrect password').isLength({ min: 5 })
// ]
//     , async (req, res) => {
//         const errors = validationResult(req);
//         if (!errors.isEmpty()) {
//             return res.status(400).json({ errors: errors.array() });
//         }

//         const salt =  await bcrypt.genSalt(10);
//         let secPassword=await bcrypt.hash(req.body.password,salt)

//         try {
//             await User.create({
//                 name: req.body.name,
//                 password: secPassword,
//                 email: req.body.email,
//                 location: req.body.location
//             })
//             res.json({ success: true });
//         } catch (error) {
//             console.log(error);
//             res.json({ success: false });
//         }
//     })

// router.post("/loginarchitect", [
//     body('email').isEmail(),
//     body('password', 'incorrect password').isLength({ min: 5 })
// ], async (req, res) => {
//     let email = req.body.email;
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//         return res.status(400).json({ errors: errors.array() });
//     }
//     try {
//         let userData = await User.findOne({ email });
//         if (!userData) {
//             return res.status(400).json({ errors: "Try logging in with correct credentials" });
//         }

//         const pwdCompare =  await bcrypt.compare(req.body.password,userData.password);

//         if (!pwdCompare) {
//             return res.status(400).json({ errors: "Try logging in with correct credentials" });
//         }
//         const data ={
//             user:{
//                 id:userData.id
//             }
//         }
//         const authToken =  jwt.sign(data,jwtSecret)
//         return res.json({ success: true,authToken:authToken });

//     } catch (error) {
//         console.log(error);
//         res.json({ success: false });
//     }
// })


// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         const uploadDir = './uploads/';
//         if (!fs.existsSync(uploadDir)) {
//             fs.mkdirSync(uploadDir);
//         }
//         cb(null, uploadDir);
//     },
//     filename: (req, file, cb) => {
//         cb(null, Date.now() + '-' + file.originalname);
//     }
// });

// // Initialize multer upload middleware
// const upload = multer({ storage: storage });


// const Architect = require('../models/Architect.js');

// // Route to handle file upload
// router.post('/upload', upload.single('file'), (req, res) => {
//     if (req.file) {
//         const newProject = {
//             name: req.body.name,
//             description: req.body.description,
//             fileName: req.file.originalname,
//             fileData: fs.readFileSync(req.file.path),
//             fileType: req.file.mimetype,
//         };
//         Architect.findOneAndUpdate(
//             { email: req.body.email },
//             { $push: { projects: newProject } },
//             { new: true },
//             (err, architect) => {
//                 if (err) {
//                     return res.status(500).json({ error: err });
//                 }
//                 fs.unlinkSync(req.file.path);
//                 return res.status(200).json({ message: 'Project uploaded successfully', architect: architect });
//             }
//         );
//     } else {
//         res.status(400).json({ error: 'File not uploaded' });
//     }
// });

// module.exports = router;


const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const router = express.Router();
const User = require('../models/Architect.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const jwtSecret = "my name is x";
const { body, validationResult } = require('express-validator');

// Multer configuration
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadDir = './uploads/';
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir);
        }
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

router.post("/createarchitect", upload.single('file'), [
    body('email').isEmail(),
    body('name').isLength({ min: 5 }),
    body('password', 'incorrect password').isLength({ min: 5 })
]
    , async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const salt = await bcrypt.genSalt(10);
        let secPassword = await bcrypt.hash(req.body.password, salt)

        try {
            await User.create({
                name: req.body.name,
                password: secPassword,
                email: req.body.email,
                location: req.body.location,
                file: req.file.path // Save file path in database
            })
            res.json({ success: true });
        } catch (error) {
            console.log(error);
            res.json({ success: false });
        }
    });

router.post("/loginarchitect", [
    body('email').isEmail(),
    body('password', 'incorrect password').isLength({ min: 5 })
], async (req, res) => {
    let email = req.body.email;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        let userData = await User.findOne({ email });
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
        }
        const authToken = jwt.sign(data, jwtSecret)
        return res.json({ success: true, authToken: authToken });

    } catch (error) {
        console.log(error);
        res.json({ success: false });
    }
});

module.exports = router;
