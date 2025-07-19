// Centralized error handler for consistent API responses
import 'dotenv/config';

export default function errorHandler(err, req, res, next) {
  const status = err.status || 500;
  const message = err.message || 'Internal Server Error';
  res.status(200).json({
    statusCode: status,
    statusMessage: message,
    state: false,
    data: null
  });
}
