import React from 'react';

const ContributorDashboard = () => {
  const myNotes = [
    { id: 1, title: 'React Hooks for Beginners', status: 'Approved', views: 1250 },
    { id: 2, title: 'Advanced Tailwind CSS Techniques', status: 'Pending', views: 2500 },
  ];

  return (
    <div className="dashboard-card">
      <h2 className="dashboard-card-title">My Uploaded Notes</h2>
      <div className="dashboard-table-wrapper">
        <table className="dashboard-table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Status</th>
              <th scope="col">Views</th>
              <th scope="col"><span className="sr-only">Actions</span></th>
            </tr>
          </thead>
          <tbody>
            {myNotes.map(note => (
              <tr key={note.id}>
                <td className="font-medium">{note.title}</td>
                <td>{note.status}</td>
                <td>{note.views}</td>
                <td className="dashboard-table-actions">
                  <button type="button" className="dashboard-table-action-button">Edit</button>
                  <button type="button" className="dashboard-table-action-button delete">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContributorDashboard;
