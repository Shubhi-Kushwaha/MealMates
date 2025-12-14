import React from 'react';
import io from 'socket.io-client';
import Spinner from './common/Spinner';

const SOCKET_URL = process.env.REACT_APP_SOCKET_URL || window.location.origin;

/**
 * Replace existing RealTimeOrderStatus logic with secure socket handshake
 * Uses socket.io auth token on connect and cleans up listeners on unmount.
 */
function RealTimeOrderStatus({ orderId, token }) {
  const [status, setStatus] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const socketRef = React.useRef(null);

  React.useEffect(() => {
    if (!orderId) return;

    socketRef.current = io(SOCKET_URL, {
      transports: ['websocket'],
      auth: { token },
      query: { orderId },
      autoConnect: true,
    });

    socketRef.current.on('connect', () => setLoading(false));
    socketRef.current.on('order:update', (payload) => {
      if (payload && String(payload.orderId) === String(orderId)) {
        setStatus(payload.status);
      }
    });

    socketRef.current.on('connect_error', (err) => {
      console.error('Socket connect error:', err?.message || err);
    });

    return () => {
      if (socketRef.current) {
        socketRef.current.off('order:update');
        socketRef.current.disconnect();
        socketRef.current = null;
      }
    };
  }, [orderId, token]);

  const statusMemo = React.useMemo(() => {
    if (!status) return null;
    return <div className={`badge ${status === 'delivered' ? 'bg-success' : 'bg-info'}`}>{status}</div>;
  }, [status]);

  if (loading) {
    return (
      <div className="order-status-skeleton d-flex align-items-center">
        <Spinner />
        <span className="ms-2">Connecting to order updates...</span>
      </div>
    );
  }

  return (
    <div className="realtime-order-status" aria-live="polite">
      <h6>Order #{orderId} Status</h6>
      <div>{statusMemo || <em>No updates yet</em>}</div>
    </div>
  );
}

export default React.memo(RealTimeOrderStatus);