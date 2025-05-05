import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

export const Sidebar: React.FC = () => {
  const tabs = [
    { name: 'Categories', path: '/admin/categories' },
    { name: 'Tags', path: '/admin/tags' },
    { name: 'Users', path: '/admin/users' },
  ];

  return (
    <div className="sidebar">
      <h2>Admin</h2>
      {tabs.map(tab => (
        <NavLink
          key={tab.path}
          to={tab.path}
          className={({ isActive }) => `sidebar-tab ${isActive ? 'active' : ''}`}
        >
          <span>{tab.name}</span>
        </NavLink>
      ))}
    </div>
  );
};

