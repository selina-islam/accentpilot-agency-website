import React from 'react'
import Sidebar from './Sidebar'
import DashboardHome from './DashboardHomme'

const Dashboard = () => {
  return (
    <div className="flex-1 p-6 md:ml-64">
      <Sidebar />
      {/* main content area with margin for sidebar */}
      <DashboardHome/>
    </div>
  )
}

export default Dashboard