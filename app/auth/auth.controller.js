import asyncHandler from 'express-async-handler';

// @desk    Auth user
// @route   POST /api/auth/login
// @access  Public
export const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  res.send({ email });
});
