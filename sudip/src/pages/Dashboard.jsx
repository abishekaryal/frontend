import React from 'react';
import AdminDashboard from '../components/dashboard/AdminDashboard';
import ContributorDashboard from '../components/dashboard/ContributorDashboard';

const Dashboard = () => {
  // For now, we will just render the admin dashboard.
  // Later, we can add logic to render the correct dashboard based on the user's role.
  const userRole = 'admin'; // This should come from authentication context

  return (
    <div className="dashboard-page-container">
      <div className="container header-container">
        <h1 className="dashboard-title">
          {userRole === 'admin' ? 'Admin Dashboard' : 'Contributor Dashboard'}
        </h1>
        {userRole === 'admin' ? <AdminDashboard /> : <ContributorDashboard />}
      </div>
    </div>
  );
};

export default Dashboard;
