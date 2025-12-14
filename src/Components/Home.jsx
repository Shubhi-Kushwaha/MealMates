import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.jpeg';
import "../styles/HeaderStyle.css";
import canteenImg from '../assets/canteen.jpeg';
import brioImg from '../assets/brio.jpeg';
import avisCafeImg from '../assets/avisCafe.jpeg';
import StationaryImg from '../assets/stationary.jpeg';
import GoGreen from '../Components/GoGreen';
import AboutUs from '../Pages/About';
import CanteenMenu from '../Menu/CanteenMenu';
import BrioMenu from '../Menu/BrioMenu';
import AvisCafeMenu from '../Menu/AvisCafeMenu';
import StationaryMenu from '../Menu/StationaryMenu';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

function Home() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('');
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  


  //const handleMenuClick = (vendor) => {
  //  setActiveTab(vendor);
  //};
  const handleMenuClick = (vendor) => {
    navigate(`/${vendor}`);
  };
  

  return (
    <div>
      {/* Navbar */}
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
       <div style={{ 
        position: 'relative', 
        height: '500px', 
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {/* Video Background */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 1
          }}
        >
          <source src="src\assets\vd1.mp4" type="video/mp4" />
        </video>
        
        {/* Dark Overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 2
        }}></div>
        
        {/* Content */}
        <div style={{ 
          position: 'relative', 
          zIndex: 3, 
          textAlign: 'center',
          color: 'white',
          padding: '20px'
        }}>
          <h5 style={{ 
            fontSize: '1.5rem', 
            fontWeight: '300',
            marginBottom: '10px',
            letterSpacing: '2px'
          }}>WELCOME</h5>
          <h1 style={{ 
            fontSize: 'clamp(2.5rem, 8vw, 4rem)', 
            fontWeight: 'bold',
            marginBottom: '20px'
          }}>Order Food</h1>
          <p style={{ 
            fontSize: '1rem',
            marginBottom: '30px'
          }}>Select your best food</p>
        </div>
      </div>
      {/* Menu Options 
      <div className="container text-center mt-4" style={{ backgroundColor: 'MediumAquaMarine' }}>
        <h2>Menu</h2>*/}
        <div
         style={{
          position: 'relative',
           top: '-60px',         
          zIndex: 20
         }}
        >
        <div className="row gx-5 justify-content-center">

          <div className="col-md-3 my-3">
            <div
              className="card food-card"
              onClick={() => handleMenuClick('canteen')}
              style={{ cursor: 'pointer' }}
            >
              <img src={canteenImg} className="card-img-top" style={{ height: '200px', objectFit: 'cover' }} alt="Canteen" />
              <div className="card-body">
                <h5 className="card-title">Canteen</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 my-3">
            <div
              className="card food-card"
              onClick={() => handleMenuClick('brio')}
              style={{ cursor: 'pointer' }}
            >
              <img src={brioImg} className="card-img-top" style={{ height: '200px', objectFit: 'cover' }} alt="Brio" />
              <div className="card-body">
                <h5 className="card-title">Brio</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 my-3">
            <div
              className="card food-card"
              onClick={() => handleMenuClick('avisCafe')}
              style={{ cursor: 'pointer' }}
            >
              <img src={avisCafeImg} className="card-img-top" style={{ height: '200px', objectFit: 'cover' }} alt="Avis Cafe" />
              <div className="card-body">
                <h5 className="card-title">Avis Cafe</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 my-3">
            <div
              className="card food-card"
              onClick={() => handleMenuClick('stationary')}
              style={{ cursor: 'pointer' }}
            >
              <img src={StationaryImg} className="card-img-top" style={{ height: '200px', objectFit: 'cover' }} alt="Stationary" />
              <div className="card-body">
                <h5 className="card-title">Stationary</h5>
              </div>
            </div>
          </div>
        </div>

        
    </div> 
    {/* Go Green Section below cards */}
<div style={{ marginTop: '-40px' }}>
  <GoGreen />
</div>
<div style={{ marginTop: '-40px' }}>
  <AboutUs />
</div>
 
    </div>
  );
}

export default Home;








