import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import UserHomePage from './pages/user/homepage';
import ProductDescriptionPage from './pages/user/descriptionpages/ProductDescriptionPage';
import LoginPage from './login';
import ContactUsPage from './pages/user/contact';
import ProfilePage from './pages/user/profile';
import AUserHomePage from './pages/admin/ahomepage';
import AProductDescriptionPage from './pages/admin/product';
import AContactUsPage from './pages/admin/acontact';
import AProfilePage from './pages/admin/aprofile';


const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = (result) => {
    console.log('Login result:', result);

    if (result.role) {
      setIsAuthenticated(true);
      setUserRole(result.role);
      setLoading(false);
    } else {
      setIsAuthenticated(false);
      setUserRole(null);
      alert(result.message);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Routes>
      <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
      <Route
        path="/"
        element={
          isAuthenticated ? (
            <Navigate to={userRole === 'admin' ? '/admin/ahomepage' : '/user/homepage'} replace />
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />

      {/* User Routes */}
      <Route
        path="/user/homepage"
        element={isAuthenticated && userRole === 'user' ? <UserHomePage /> : <Navigate to="/login" replace />}
      />
      <Route
        path="/user/homepage/contact"
        element={isAuthenticated && userRole === 'user' ? <ContactUsPage /> : <Navigate to="/login" replace />}
      />
      <Route
        path="/user/descriptionpages/:productId"
        element={isAuthenticated && userRole === 'user' ? <ProductDescriptionPage /> : <Navigate to="/login" replace />}
      />
      <Route
        path="/user/homepage/profile"
        element={isAuthenticated && userRole === 'user' ? <ProfilePage /> : <Navigate to="/login" replace />}
      />

      {/* Admin Routes */}
      <Route
        path="/admin/ahomepage"
        element={isAuthenticated && userRole === 'admin' ? <AUserHomePage /> : <Navigate to="/login" replace />}
      />
      <Route
        path="/admin/product/:productId"
        element={isAuthenticated && userRole === 'admin' ? <AProductDescriptionPage /> : <Navigate to="/login" replace />}
      />
      <Route
        path="/admin/acontact"
        element={isAuthenticated && userRole === 'admin' ? <AContactUsPage /> : <Navigate to="/login" replace />}
      />
      <Route
        path="/admin/aprofile"
        element={isAuthenticated && userRole === 'admin' ? <AProfilePage /> : <Navigate to="/login" replace />}
      />
    </Routes>
  );
};

export default App;
