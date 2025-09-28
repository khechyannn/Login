import express from "express";
import EmployeeModel from "../models/Employee.js";
import bcrypt from "bcrypt"

const router = express.Router();
const SALT_ROUNDS = 10;

router.post('/login', (req, res) => {
    const { email, password } = req.body;
    EmployeeModel.findOne({ email: email })
        .then(user => {
            if (user) {
                bcrypt.compare(password, user.password)
                    .then(match => {
                        if (match) {
                            res.json("Success")
                        }
                        else {
                            res.json("the password is incorrect")
                        }
                    })
            }
            else {
                res.json("No record existed")
            }
        })
        .catch(err => res.json(err));
})

router.post('/', (req, res) => {
    const { name, email, password } = req.body;

    if (password.length < 6) {
        return res.json({ error: "Password must be at least 6 characters" });
    }

    EmployeeModel.findOne({ email: email })
        .then(existingUser => {
            if (existingUser) {
                return res.json({ error: "Email already registered" });
            }

            bcrypt.hash(password, SALT_ROUNDS)
                .then(hash => EmployeeModel.create({ name, email, password: hash }))
                .then(user => res.json({ user }))
                .catch(err => res.json({ error: err.message }));
        })
        .catch(err => res.json({ error: err.message }));
});

export default router;
