import React from 'react';
import { useGlobalContext } from './context';

export const Location = () => {
  const { locations, handleLocation } = useGlobalContext();

  return (
    <>
      <ul className="location-content">
        {locations.map((location, index) => {
          return (
            <li key={index} className="location-container">
              <span className="material-icons-round location-icon">place</span>

              <p className="location-text">
                <span id={location} onClick={handleLocation}>
                  {location}
                </span>
              </p>
            </li>
          );
        })}
      </ul>
      <div className="clear-location-container">
        <span className="clear-location" id="clear" onClick={handleLocation}>
          clear location
        </span>
      </div>
    </>
  );
};
