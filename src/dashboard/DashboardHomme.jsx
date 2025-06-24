import React from "react";

const DashboardHome = () => {
  return (
    <div className="min-h-screen p-6" style={{ backgroundColor: "#0F172A" }}>
      <h1 className="text-white text-3xl font-bold mb-8">
        Welcome to AccentPilot Dashboard
      </h1>

      {/* summary cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
        <div className="bg-blue-900 p-6 rounded shadow-lg text-white">
          <h2 className="text-lg font-semibold">Total Students</h2>
          <p className="text-4xl mt-3">150</p>
        </div>

        <div className="bg-blue-900 p-6 rounded shadow-lg text-white">
          <h2 className="text-lg font-semibold">Total Teachers</h2>
          <p className="text-4xl mt-3">20</p>
        </div>

        <div className="bg-blue-900 p-6 rounded shadow-lg text-white">
          <h2 className="text-lg font-semibold">Courses</h2>
          <p className="text-4xl mt-3">35</p>
        </div>

        <div className="bg-blue-900 p-6 rounded shadow-lg text-white">
          <h2 className="text-lg font-semibold">Pending Payments</h2>
          <p className="text-4xl mt-3 text-red-400">5</p>
        </div>
      </div>

      {/* recent activities */}
      <div className="bg-blue-900 p-6 rounded shadow-lg text-white">
        <h2 className="text-2xl font-semibold mb-4">Recent Enrollments</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>John Doe enrolled in "Basic English"</li>
          <li>Maria joined "Advanced Grammar"</li>
          <li>Ali registered for "Speaking Practice"</li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardHome;
