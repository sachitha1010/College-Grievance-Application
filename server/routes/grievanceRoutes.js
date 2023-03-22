import { Router } from "express";
import GrievanceModel from "../models/Grievance.js";

const router = Router();

router.get("/", async (req, res) => {
    try {
      const grievance= await GrievanceModel.find({
        category: "general",
        status:"approved",
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


  router.get("/canteen", async (req, res) => {
    try {
      const grievance= await GrievanceModel.find({
        category: "canteen",
        status:"approved",
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

  router.get("/hostel", async (req, res) => {
    try {
      const grievance= await GrievanceModel.find({
        category: "hostel",
        status:"approved",
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

  router.get("/department", async (req, res) => {
    try {
      const grievance= await GrievanceModel.find({
        category: "department",
        status:"approved",
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


  

router.post("/",async (req,res)=>{
    const grievance =req.body
    const newGrievance=new GrievanceModel(grievance);
    await newGrievance.save();
    res.json(grievance);
});

router.put("/updatevotes",async(req,res)=>{
  const id=req.body.id;
  try{
    await GrievanceModel.findById(id,(err,updatedGrievance)=>{
      updatedGrievance.votes=updatedGrievance.votes+1;
      updatedGrievance.save();
      res.send("updatevotes");

    });

  }catch(err){
    console.log(err);
  }
});
export default router;