import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/admin/login', { username, password });
      if (res.data.success) {
        navigate('/admin/dashboard');
      } else {
        alert('Login failed');
      }
    } catch (err) {
      alert('Login error');
    }
  };

  return (
    <div className="container mt-5">
      <h3>Admin Login</h3>
      <input type="text" className="form-control my-2" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
      <input type="password" className="form-control my-2" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button className="btn btn-primary" onClick={handleLogin}>Login</button>
    </div>
  );
};

export default AdminLogin;
