import express from "express"
import { login, logout, register, updateProfile } from "../controllers/user.controller.js"
import isAuthenticated from "../middlewares/isAuthenticated.js"
import { singleupload } from "../middlewares/multer.js"

const router = express.Router()

router.route("/register").post(singleupload,register)
router.route("/login").post(login)
router.route("/profile/update").post(isAuthenticated,singleupload,updateProfile)
router.route("/logout").get(logout)

export default router