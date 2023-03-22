import { Router } from "express";
import GrievanceModel from "../models/Grievance.js";

const router =Router();

router.get("/waiting", async (req, res) => {
    try {
      const grievance= await GrievanceModel.find({
        status: "waiting",
      });
      if (!grievance) {
        return res.status(404).json({ error: "Not Found" });
      } else {
        res.status(200).json(grievance);
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: err.message });
    }
  });

  router.get("/approved", async (req, res) => {
    try {
      const grievance= await GrievanceModel.find({
        status: "waiting",
      });
      if (!grievance) {
        return res.status(404).json({ error: "Not Found" });
      } else {
        res.status(200).json(grievance);
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: err.message });
    }
  });

  router.get("/unsolved", async (req, res) => {
    try {
      const grievance= await GrievanceModel.find({
        progress: "unsolved",
      });
      if (!grievance) {
        return res.status(404).json({ error: "Not Found" });
      } else {
        res.status(200).json(grievance);
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: err.message });
    }
  });
  router.get("/solved", async (req, res) => {
    try {
      const grievance= await GrievanceModel.find({
        progress: "solved",
      });
      if (!grievance) {
        return res.status(404).json({ error: "Not Found" });
      } else {
        res.status(200).json(grievance);
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: err.message });
    }
  });
  router.get("/inprogress", async (req, res) => {
    try {
      const grievance= await GrievanceModel.find({
        progress: "inprogress",
      });
      if (!grievance) {
        return res.status(404).json({ error: "Not Found" });
      } else {
        res.status(200).json(grievance);
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: err.message });
    }
  });

  router.put("/updateapproval",async(req,res)=>{
    const newStatus=req.body.newStatus;
    const id=req.body.id;
    const newProgress=req.body.newProgress;
    try{
      await GrievanceModel.findById(id,(err,updatedGrievance)=>{
        updatedGrievance.status=newStatus;
        updatedGrievance.progress=newProgress;
        updatedGrievance.save();
        res.send("updateapproval");

      });

    }catch(err){
      console.log(err);
    }
  });

  router.put("/updatecomment",async(req,res)=>{
    const newComment=req.body.newComment;
    const id=req.body.id;
    const newProgress=req.body.newProgress;
    try{
      await GrievanceModel.findById(id,(err,updatedGrievance)=>{
        updatedGrievance.comment=newComment;
        updatedGrievance.progress=newProgress;
        updatedGrievance.save();
        res.send("updatecomment");

      });

    }catch(err){
      console.log(err);
    }
  });

  router.delete("/delete/:id",async(req,res)=>{
    const id=req.params.id;

    await GrievanceModel.findByIdAndRemove(id).exec();
    res.send("deleted");
  })
export default router;