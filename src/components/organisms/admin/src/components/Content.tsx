import React, { useState } from 'react';
import Table from './Table';
import './Content.css';

interface ContentProps {
  activeTab: string;
}

const Content: React.FC<ContentProps> = ({ activeTab }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  return (
    <div className="content">
      <div className="header">
        <h2>{activeTab}</h2>
        <div className="actions">
          <button className="export-button">Export</button>
          <button className="add-button">+ New {activeTab}</button>
        </div>
      </div>
      <div className="search-bar">
        <input
          type="text"
          placeholder={`Search: ${activeTab.toLowerCase()}`}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="search-button">Search</button>
        <button className="clear-button">X</button>
      </div>
      <Table
        activeTab={activeTab}
        searchQuery={searchQuery}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        onPageChange={setCurrentPage}
        onItemsPerPageChange={setItemsPerPage}
      />
    </div>
  );
};

export default Content;