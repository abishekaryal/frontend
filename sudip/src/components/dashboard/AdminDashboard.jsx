import React from 'react';

const AdminDashboard = () => {
  const notes = [
    { id: 1, title: 'React Hooks for Beginners', author: 'John Doe', status: 'Approved' },
    { id: 2, title: 'Advanced Tailwind CSS Techniques', author: 'Jane Smith', status: 'Pending' },
    { id: 3, title: 'Node.js and Express Fundamentals', author: 'Peter Jones', status: 'Approved' },
  ];

  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Contributor' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Admin' },
    { id: 3, name: 'Peter Jones', email: 'peter@example.com', role: 'User' },
  ];

  const accessRequests = [
    { id: 1, userName: 'Alice Bhattarai', noteTitle: 'React Hooks for Beginners', status: 'Pending' },
    { id: 2, userName: 'Bob White', noteTitle: 'Node.js and Express Fundamentals', status: 'Approved' },
  ];

  return (
    <div className="admin-dashboard-grid">
      <div className="admin-dashboard-notes-section dashboard-card">
        <h2 className="dashboard-card-title">All Notes</h2>
        <div className="dashboard-table-wrapper">
          <table className="dashboard-table">
            <thead>
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Author</th>
                <th scope="col">Status</th>
                <th scope="col"><span className="sr-only">Actions</span></th>
              </tr>
            </thead>
            <tbody>
              {notes.map(note => (
                <tr key={note.id}>
                  <td className="font-medium">{note.title}</td>
                  <td>{note.author}</td>
                  <td>{note.status}</td>
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

      <div className="admin-dashboard-side-sections">
        <div className="dashboard-card">
          <h2 className="dashboard-card-title">All Users</h2>
          <div className="dashboard-table-wrapper">
            <table className="dashboard-table">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Role</th>
                  <th scope="col"><span className="sr-only">Actions</span></th>
                </tr>
              </thead>
              <tbody>
                {users.map(user => (
                  <tr key={user.id}>
                    <td className="font-medium">{user.name}</td>
                    <td>{user.role}</td>
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

        <div className="dashboard-card">
          <h2 className="dashboard-card-title">Access Requests</h2>
          <div className="dashboard-table-wrapper">
            <table className="dashboard-table">
              <thead>
                <tr>
                  <th scope="col">User</th>
                  <th scope="col">Note</th>
                  <th scope="col"><span className="sr-only">Actions</span></th>
                </tr>
              </thead>
              <tbody>
                {accessRequests.map(request => (
                  <tr key={request.id}>
                    <td className="font-medium">{request.userName}</td>
                    <td>{request.noteTitle}</td>
                    <td className="dashboard-table-actions">
                      <button type="button" className="dashboard-table-action-button approve">Approve</button>
                      <button type="button" className="dashboard-table-action-button delete">Reject</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
