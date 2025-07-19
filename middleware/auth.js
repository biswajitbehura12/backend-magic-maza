


import jwt from 'jsonwebtoken';
import 'dotenv/config';

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) {
    return res.status(200).json({
      statusCode: 401,
      statusMessage: 'Unauthorized',
      state: false,
      data: null
    });
  }
  try {
    const secret = process.env.TOKEN_SECRET || 'default_secret';
    const decoded = jwt.verify(token, secret);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(200).json({
      statusCode: 401,
      statusMessage: 'Invalid or expired token',
      state: false,
      data: null
    });
  }
}
export default authenticateToken;
