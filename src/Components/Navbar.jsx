import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.jpeg';

function MainNavbar() {
  const navigate = useNavigate();

  return (
<nav
  className="navbar navbar-expand-lg px-3"
  style={{
    background: 'rgba(0, 0, 0, 0.3)', // blackish transparent
    backdropFilter: 'blur(12px)',     // glass blur
    WebkitBackdropFilter: 'blur(12px)', // Safari support
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    position: 'fixed',
    width: '100%',
    top: 0,
    zIndex: 1000
  }}
>
        <div className="d-flex align-items-center">
          <img src={logo} alt="Logo" width="40" height="40" />
          <h5 className="ms-2 mb-0 text-white">MealMates</h5>
        </div>
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to ="/" className="text-white">Home</Nav.Link>
            <Nav.Link as={Link} to ="/about"  className="text-white">About</Nav.Link>
            <Nav.Link as={Link} to ="/contact"  className="text-white">Contact</Nav.Link>
            <Nav.Link as={Link} to ="/GoGreen" className="text-white"><button className="btn btn-outline-success text-white border-white me-2" onClick={() => navigate('/gogreen')}>Go Axis Green</button></Nav.Link>
            <Nav.Link as={Link} to ="/cart" ><div className="cart"><button className="btn btn-outline-warning me-2" onClick={() => navigate('/cart')}><i className="bi bi-bag fs-5"></i></button></div></Nav.Link>
            <Nav.Link as={Link} to="/login">
              <button className="btn btn-primary">Login / Signup</button>
           </Nav.Link>
            <Nav.Link as={Link} to ="/info" ><div className="ms-auto">
          <div className="dropdown">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="Profile"
              width="35"
              height="35"
              className="rounded-circle dropdown-toggle"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ cursor: 'pointer' }}
            />
            <ul className="dropdown-menu dropdown-menu-end">
              <li className="px-3 py-2">
                <strong>Edit Info</strong>
                <input
                  type="text"
                  placeholder="Name"
                  className="form-control my-1"
                  defaultValue={localStorage.getItem('userName') || ''}
                  onBlur={(e) => localStorage.setItem('userName', e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Phone"
                  className="form-control"
                  defaultValue={localStorage.getItem('phone') || ''}
                  disabled
                />
              </li>
              <li><hr className="dropdown-divider" /></li>
              <li><button className="dropdown-item">Order History</button></li>
              <li><button className="dropdown-item">Feedback</button></li>
              <li><button className="dropdown-item">Contact Us</button></li>
            </ul>
          </div>
        </div></Nav.Link>
        
            
          </Nav>
        </Navbar.Collapse>
        
      </nav>
     );
}

export default MainNavbar;  