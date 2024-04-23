import asyncHandler from 'express-async-handler'

import { prisma } from '../prisma.js'
import { returnObjectUser } from '../utils/user.utils.js'

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
export const getUserProfile = asyncHandler(async (req, res) => {
	const user = await prisma.user.findUnique({
		where: {
			id: 2
		},
		select: returnObjectUser
	})

	res.json(user)
})
