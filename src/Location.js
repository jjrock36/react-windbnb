import React, { useEffect } from 'react';
import { useGlobalContext } from './context';

export const Location = () => {
  const { locations, handleLocation } = useGlobalContext();

  return (
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
  );
};
