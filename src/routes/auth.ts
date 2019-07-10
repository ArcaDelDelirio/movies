import * as express from "express";
export const authRouter = express.Router();
const jwt = require('jsonwebtoken');

authRouter.post('/', (req, res) => {
    const nick = req.body.nick;
    const password = req.body.password;

    const tokenData = {
        nick: nick
    }

    const token = jwt.sign(tokenData, 'M1sup3rS3CR3T0', {
        expiresIn: 60 * 60 * 24 // expires in 24 hours
    });
    res.send({token});
});