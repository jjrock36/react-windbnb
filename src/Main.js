import React from 'react';
import { Place } from './Place';
import { useGlobalContext } from './context';

export const Main = () => {
  const { sortedPlaces } = useGlobalContext();
  return (
    <section className="section">
      <div className="section-header">
        <div className="section-header-title">
          <h2>Stays in Finland</h2>
        </div>
        <div className="section-header-stays">
          <p className="stays-text">
            <span>{sortedPlaces.length}</span> stays
          </p>
        </div>
      </div>

      <div className="section-center">
        {sortedPlaces.map((place, index) => {
          return <Place key={index} {...place} />;
        })}
      </div>
    </section>
  );
};
