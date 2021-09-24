import React from 'react';

export const Place = ({ superHost, title, rating, type, beds, photo }) => {
  return (
    <article className="place-card">
      <div className="place-image-container">
        <img className="place-image" src={photo} alt={title} />
      </div>

      <div className="place-info-container">
        <div className="place-info">
          {superHost && <h3 className="place-host">super host</h3>}

          <p className="place-type">{type}</p>
          {beds && (
            <>
              <p className="dot">.</p>
              <p className="place-beds">{beds + ' beds'}</p>
            </>
          )}
        </div>

        <div className="place-rating">
          <span className="material-icons-round star-icon">star_rate</span>
          <p className="rating">{rating}</p>
        </div>
      </div>

      <div className="place-title-container">
        <p className="place-title">{title}</p>
      </div>
    </article>
  );
};
