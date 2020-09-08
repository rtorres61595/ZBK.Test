const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
// Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");
// Load User model
const User = require("../../models/user");

// @route POST api/users/register
// @desc Register user
// @access Public
module.exports = function(app) {
    app.post("/api/signup", (req, res) => {
        console.log("server api signup");
        console.log(req.body, "from form");
    
        // Form validation
        const { errors, isValid } = validateRegisterInput(req.body);
        // Check validation
        if (!isValid) {
            return res.status(400).json(errors);
        }
        User.findOne({ email: req.body.email }).then(user => {
            if (user) {
                return res.status(400).json({ email: "Email already exists" });
            } else {
                const newUser = new User({
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password
                });
                console.log(newUser, "printing new user in users.js file")
                // Hash password before saving in database
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if (err) throw err;
                        newUser.password = hash;
                        newUser
                            .save()
                            .then(user => res.json(user))
                            .catch(err => console.log(err));
                    });
                });
            }
        });
    });
    
    // @route POST api/users/login
    // @desc Login user and return JWT token
    // @access Public
    app.post("/api/login", (req, res) => {
        // Form validation
        const { errors, isValid } = validateLoginInput(req.body);
        // Check validation
        if (!isValid) {
            return res.status(400).json(errors);
        }
        const email = req.body.email;
        const password = req.body.password;
        // Find user by email
        User.findOne({ email }).then(user => {
            // Check if user exists
            if (!user) {
                return res.status(404).json({ emailnotfound: "Email not found" });
            }
            // Check password
            bcrypt.compare(password, user.password).then(isMatch => {
                if (isMatch) {
                    // User matched
                    // Create JWT Payload
                    const payload = {
                        id: user.id,
                        name: user.name,
                        favoriteSpots: user.favoriteSpots
                    };
                    // Sign token
                    jwt.sign(
                        payload,
                        keys.secretOrKey,
                        {
                            expiresIn: 31556926 // 1 year in seconds
                        },
                        (err, token) => {
                            res.json({
                                success: true,
                                token: "Bearer " + token
                            });
                        }
                    );
                } else {
                    return res
                        .status(400)
                        .json({ passwordincorrect: "Password incorrect" });
                }
            });
        });
    });

    app.get('/api/getAllUserData', (req, res) => {
        User.find().then(users => {
            console.log(users);
            if (!users) {
                return res.status(404).json({ noData: "No user data found" });
            }
            res.status(200).json({listOfData: users})
        })
    })

    app.get('/api/getThisUserData', (req, res) => {
        console.log(req.body.email, "this is working though");
        const email = req.body.email;
        User.findOne({email}).then(user => {
            console.log(user, "line 115");
            // Check if user exists
            if (!user) {
                return res.status(404).json({ emailnotfound: "Email not found" });
            }
            res.status(200).json({thisUser: user})
        })
    })

    app.post("/api/addFavorite", (req, res) => {

    })
}

