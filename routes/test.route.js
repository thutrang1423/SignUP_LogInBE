import express from "express";
import {shouldBeLoggedIn, shouldBeAdmin} from "../controllers/test.controller.js"

const router = express.Router();

router.get("/should-be-logged-in", shouldBeLoggedIn);
router.get("/should-be-admin", shouldBeAdmin);

router.get("/try",(req,res)=>{
    res.send("work")
})

export default router;