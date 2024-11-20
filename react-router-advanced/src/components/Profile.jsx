import React from 'react';
import { Outlet, Link } from 'react-router-dom';

/**
 * Profile component that serves as a layout for nested routes.
 * It includes navigation links to sub-sections and renders child routes using <Outlet />.
 */
const Profile = () => {
  return (
    <div>
      <h2>Profile Page</h2>
      <nav>
        <ul>
          <li>
            <Link to="details">Profile Details</Link>
          </li>
          <li>
            <Link to="settings">Profile Settings</Link>
          </li>
        </ul>
      </nav>

      {/* Placeholder for nested routes */}
      <Outlet />
    </div>
  );
};
export default Profile;
