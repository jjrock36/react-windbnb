import React from 'react';
import { useGlobalContext } from './context';
import logo from './triangleLogo.png';

export const Header = () => {
  const { handleShowModal, currentLocation, numGuests, handleFilter } =
    useGlobalContext();

  return (
    <>
      <header className="header">
        <div className="header-center">
          <div className="logo-container">
            <img className="logo" src={logo} alt="logo" />
            <h1 className="logo-text">windbnb</h1>
          </div>

          <div className="searchbar-container">
            <div className="searchbar-location">
              <p className={`location ${currentLocation && `selected`}`}>
                <span id="location" onClick={handleShowModal}>
                  {currentLocation ? currentLocation : 'Select Location'}
                </span>
              </p>
            </div>
            <div className="searchbar-guests">
              <p className={`guests ${numGuests > 0 ? 'selected' : ''}`}>
                <span id="guest" onClick={handleShowModal}>
                  {numGuests > 0 ? numGuests : 'Add Guest'}
                </span>
              </p>
            </div>
            <button className="searchbar-btn" onClick={handleFilter}>
              <span className="material-icons-round searchbar-icon">
                search
              </span>
            </button>
          </div>
        </div>
      </header>
    </>
  );
};
