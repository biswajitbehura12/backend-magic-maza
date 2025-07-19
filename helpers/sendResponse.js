// Unified API response helper
export function sendResponse(res, { statusCode = 200, statusMessage = 'OK', state = true, data = null } = {}) {
  res.status(200).json({
    statusCode,
    statusMessage,
    state,
    data
  });
}
