const express = require('express');
const jwt = require('jsonwebtoken');

// file locations
const {UserModel} = require('../models/UserModel');

const userRegister = async (req, res) => {
    const { name, email, password,role } = req.body;
    const user = new UserModel({ name, email, password,role });
    try {
        await user.save();
        res.status(201).send('User registered successfully');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const userLogin = async (req, res) => {

    const { email, password } = req.body;
    try {
        const user = await UserModel.findOne({email});
        if(!user) return res.status(404).send('User not found');
        const isMatch = await user.comparePassword(password);
        if(!isMatch) return res.status(400).send('Invalid credentials');
        

        // start codeing jwt and seesion
        const token = jwt.sign({ id: user._id, username: user.username,role: user.role }, process.env.JWT_SECRET, { expiresIn: '1d' });
        res.cookie('token', token, { httpOnly: true });
        res.status(200).send('User logged in successfully');

    }catch(error){
        res.status(400).send(error.message);
    }
    
}



module.exports = { userRegister, userLogin };