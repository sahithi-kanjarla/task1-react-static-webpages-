import React, { useState } from 'react';
import { FaSearch, FaSync } from 'react-icons/fa';
import styles from './CompanySelection.module.css'; // Import CSS module


const CompanySelection = () => {
  const [searchVisible, setSearchVisible] = useState(false);

  const toggleSearch = () => {
    setSearchVisible(!searchVisible);
  };

  const handleReload = () => {
    // Add logic here to reload data or perform any other action
    console.log('Reloading data...');
  };

  return (
    <div className={styles.companySelectionContainer}>
      <div className={styles.toolbar}>
        <div className={styles.title}>Companies</div>
        <div className={styles.actions}>
          <FaSync className={styles.reloadIcon} onClick={handleReload} />
          <FaSearch className={styles.searchIcon} onClick={toggleSearch} />
        </div>
      </div>
      {searchVisible && (
        <div className={styles.searchBar}>
          <input type="text" placeholder="Search..." />
        </div>
      )}
      {/* Render list of available companies here */}
    </div>
  );
};

export default CompanySelection;