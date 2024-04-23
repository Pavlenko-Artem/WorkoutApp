import express from 'express'

import { getUserProfile } from './user.controller.js'

const router = express.Router()

router.get('/profile', getUserProfile)

export default router
