import React from 'react';

function Dashboard() {
  const apiList = [
    { id: 1, name: 'OpenAI API', status: 'Connected' },
    { id: 2, name: 'Google Dialogflow', status: 'Disconnected' },
    { id: 3, name: 'Custom AI Model', status: 'Connected' },
  ];

  return (
    <div className="dashboard-container">
      <h2>API Dashboard</h2>
      <ul className="api-list">
        {apiList.map((api) => (
          <li key={api.id}>
            <div>
              <h3>{api.name}</h3>
              <p>Status: {api.status}</p>
            </div>
            <button>{api.status === 'Connected' ? 'Manage' : 'Connect'}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
