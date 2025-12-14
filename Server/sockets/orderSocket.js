const jwt = require('jsonwebtoken');

/**
 * socketAuthMiddleware - verify JWT on socket handshake
 * Usage: io.use(require('./sockets/orderSocket'));
 */
function socketAuthMiddleware(socket, next) {
  try {
    const auth = socket.handshake.auth || {};
    let token = auth.token;
    const header = socket.handshake.headers?.authorization || socket.handshake.headers?.Authorization;
    if (!token && header && header.startsWith('Bearer ')) token = header.split(' ')[1];

    if (!token) {
      const err = new Error('Unauthorized: No token');
      err.data = { content: 'Missing token' };
      return next(err);
    }

    const secret = process.env.JWT_SECRET;
    if (!secret) {
      console.error('JWT_SECRET missing for socket auth');
      return next(new Error('Server misconfiguration'));
    }

    const decoded = jwt.verify(token, secret);
    socket.user = { id: decoded.id, role: decoded.role, email: decoded.email };
    return next();
  } catch (err) {
    const error = new Error('Unauthorized');
    error.data = { content: 'Invalid token' };
    return next(error);
  }
}

module.exports = socketAuthMiddleware;