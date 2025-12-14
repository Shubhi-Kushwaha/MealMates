
module.exports = function (err, req, res, next) {
  console.error(`[Error] ${err.message}`, {
    path: req.path,
    method: req.method,
    stack: process.env.NODE_ENV === 'production' ? undefined : err.stack,
  });

  const status = err.status || 500;
  const response = { error: status === 500 ? 'Internal server error.' : err.message };
  res.status(status).json(response);
};