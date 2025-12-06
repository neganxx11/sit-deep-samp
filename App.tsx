import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { db } from './services/db';

// Layouts
import { Layout } from './components/Layout';

// Pages
import { Landing } from './pages/Landing';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Dashboard } from './pages/Dashboard';
import { ManageApps } from './pages/ManageApps';
import { Licenses } from './pages/Licenses';
import { Integrations } from './pages/Integrations';

// Auth Guard
const ProtectedRoute = () => {
  const isAuth = !!db.getSession();
  return isAuth ? (
    <Layout>
      <Outlet />
    </Layout>
  ) : (
    <Navigate to="/login" replace />
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/apps" element={<ManageApps />} />
          <Route path="/licenses" element={<Licenses />} />
          <Route path="/integrations" element={<Integrations />} />
          {/* Fallback */}
          <Route path="/settings" element={<div className="text-white">Settings Page (Coming Soon)</div>} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;