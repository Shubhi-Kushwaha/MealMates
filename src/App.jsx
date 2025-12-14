import React, { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Spinner from './components/common/Spinner';
import MainNavbar from './Components/Navbar';

// Lazy loaded components
const Home = React.lazy(() => import('./components/Home'));
const Login = React.lazy(() => import('./Components/Login'));
const Location = React.lazy(() => import('./components/Location'));
const GoGreen = React.lazy(() => import('./Components/GoGreen'));
const Menu = React.lazy(() => import('./Components/Menu'));
const Cart = React.lazy(() => import('./components/Cart'));
const Info = React.lazy(() => import('./components/Info'));

const AdminLogin = React.lazy(() => import('./components/admin/AdminLogin'));
const AdminDashboard = React.lazy(() => import('./Components/admin/AdminDashboard'));
const ManageMenu = React.lazy(() => import('./Components/admin/ManageMenu'));
const ManageOrders = React.lazy(() => import('./Components/admin/ManageOrders'));
const ManageUsers = React.lazy(() => import('./Components/admin/ManageUsers'));
const Payments = React.lazy(() => import('./Components/admin/Payments'));

const CanteenMenu = React.lazy(() => import('./Menu/CanteenMenu'));
const BrioMenu = React.lazy(() => import('./Menu/BrioMenu'));
const AvisCafeMenu = React.lazy(() => import('./Menu/AvisCafeMenu'));
const StationaryMenu = React.lazy(() => import('./Menu/StationaryMenu'));

const About = React.lazy(() => import('./Pages/About'));
const RefundPolicy = React.lazy(() => import('./Pages/RefundPolicy'));
const ShippingPolicy = React.lazy(() => import('./Pages/ShippingPolicy'));
const ContactUs = React.lazy(() => import('./Pages/ContactUs'));

function App() {
  const isAdmin = localStorage.getItem("isAdmin") === "true";

  return (
    <Suspense
      fallback={
        <div className="d-flex justify-content-center align-items-center vh-100">
          <Spinner />
        </div>
      }
    >
       <MainNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/location" element={<Location />} />
        <Route path="/gogreen" element={<GoGreen />} />
        <Route path="/menu/:vendor" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/info" element={<Info />} />

        {/* Admin Routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route
          path="/admin/dashboard"
          element={isAdmin ? <AdminDashboard /> : <Navigate to="/admin/login" />}
        />
        <Route path="/admin/menu" element={<ManageMenu />} />
        <Route path="/admin/orders" element={<ManageOrders />} />
        <Route path="/admin/users" element={<ManageUsers />} />
        <Route path="/admin/payments" element={<Payments />} />

        {/* Vendor Menus */}
        <Route path="/canteen" element={<CanteenMenu />} />
        <Route path="/brio" element={<BrioMenu />} />
        <Route path="/aviscafe" element={<AvisCafeMenu />} />
        <Route path="/stationary" element={<StationaryMenu />} />

        {/* Static Pages */}
        <Route path="/about" element={<About />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/shipping-policy" element={<ShippingPolicy />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Suspense>
  );
}

export default App;


