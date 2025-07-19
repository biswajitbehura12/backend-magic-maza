import jwt from 'jsonwebtoken';
import 'dotenv/config';

export function generateToken() {
  const secret = process.env.TOKEN_SECRET || 'default_secret';
  const expiresIn = parseInt(process.env.TOKEN_EXPIRE_SEC) || 600;
  const payload = { issuedAt: Date.now() };
  const token = jwt.sign(payload, secret, { expiresIn });
  return { token, expiresIn };
}
