import React from 'react';
import { Location } from './Location';
import { Guest } from './Guest';
import { useGlobalContext } from './context';

export const Search = () => {
  const {
    filterType,
    handleFilterType,
    handleShowModal,
    currentLocation,
    numGuests,
    handleFilter,
  } = useGlobalContext();

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-header">
          <h4>Edit your search</h4>
          <span
            className="material-icons close-btn"
            id="close"
            onClick={handleShowModal}
          >
            close
          </span>
        </div>
        <div className="modal-center">
          <div className="modal-search-container">
            <div className="search-title-container">
              <h5 className="search-title">location</h5>
              <p className={`location ${currentLocation && `selected`}`}>
                <span id="location" onClick={handleFilterType}>
                  {currentLocation ? currentLocation : 'Select Location'}
                </span>
              </p>
            </div>
            <div className="search-title-container">
              <h5 className="search-title">guests</h5>
              <p className={`guests ${numGuests > 0 ? 'selected' : ''}`}>
                <span id="guest" onClick={handleFilterType}>
                  {numGuests > 0 ? numGuests : 'Add Guest'}
                </span>
              </p>
            </div>
          </div>

          {filterType === 'location' ? <Location /> : <Guest />}
        </div>

        <div className="btn-container">
          <button className="submit-btn" onClick={handleFilter}>
            <span className="material-icons-round search-icon">search</span>
            <p className="btn-text">search</p>
          </button>
        </div>
      </div>
    </div>
  );
};
