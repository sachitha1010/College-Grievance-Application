import express from "express";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";

const salt = bcrypt.genSaltSync(10);
const secret = 'asdfe45we45w345wegw345werjktjwertkj';

import { Router } from "express";
import User from "../models/Users.js"

const router = Router();
router.use(cookieParser());


router.post('/register', async (req,res) => {
  const {name,email,password,role} = req.body;
  try{
    const userDoc = await User.create({
      name,
      email,
      password:bcrypt.hashSync(password,salt),
      role,
    });
    res.json(userDoc);
  } catch(e) {
    console.log(e);
    res.status(400).json(e);
  }
});

router.post('/login', async (req,res) => {
  const {name,password} = req.body;
  const userDoc = await User.findOne({name});
  if (!userDoc) {
    return res.status(404).json({ error: "No such user" });
  } else {
    const passOk = bcrypt.compareSync(password, userDoc.password);
  if (passOk) {
    // logged in
    jwt.sign({name,id:userDoc._id}, secret, {}, (err,token) => {
      if (err) throw err;
      res.cookie('token', token).json({
        id:userDoc._id,
        name,
        role:userDoc.role,
      });
    });
  } else {
    res.status(400).json('wrong credentials');
  }
  }
  
});
router.get('/profile', (req,res) => {
  const {token} = req.cookies;
  jwt.verify(token, secret, {}, (err,info) => {
    if (err) throw err;
    res.json(info);
  });
});

router.post('/logout', (req,res) => {
  res.cookie('token', '').json('ok');
});



export default router;
