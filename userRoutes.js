import { Router } from "express";
import registerUser from "./userController.js";

const router = Router();

router.route("/success").post(registerUser);

export default router;
