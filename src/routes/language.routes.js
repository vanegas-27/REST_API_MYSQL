import { Router } from "express";
import  {methods} from "../controller/language.controller.js";

const router = Router();

router.get("/",methods.getLanguage);

export default router;