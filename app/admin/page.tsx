// pages/admin/dashboard.tsx
'use client'
import ProtectedRoute from '../components/protected/ProtectedRoute';

const Dashboard = () => {
  return (
    <ProtectedRoute>
      <h1>Welcome to the Admin Dashboard</h1>
      {/* Other dashboard content */}
    </ProtectedRoute>
  );
};

export default Dashboard;
