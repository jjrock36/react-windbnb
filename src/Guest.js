import React, { useState, useEffect } from 'react';
import { useGlobalContext } from './context';

export const Guest = () => {
  const [numChildren, setNumChildren] = useState(0);
  const [numAdults, setNumAdults] = useState(0);

  const { handleNumGuests } = useGlobalContext();

  const handleGuests = (e) => {
    switch (e.target.id) {
      case 'add-adult':
        setNumAdults(numAdults + 1);
        break;
      case 'remove-adult':
        if (numAdults === 0) {
          break;
        } else {
          setNumAdults(numAdults - 1);
          break;
        }
      case 'add-child':
        setNumChildren(numChildren + 1);
        break;
      case 'remove-child':
        if (numChildren === 0) {
          break;
        } else {
          setNumChildren(numChildren - 1);
          break;
        }
      default:
        break;
    }
  };

  useEffect(() => {
    handleNumGuests(numAdults + numChildren);
  }, [numAdults, numChildren, handleNumGuests]);

  return (
    <ul className="guest-content">
      <li className="adult-container">
        <div className="guest-title-container">
          <h6 className="guest-title">Adults</h6>
          <p className="helper-text">Ages 13 or above</p>
        </div>

        <div className="guest-quantity-container">
          <span
            className="material-icons-round minus-icon"
            id="remove-adult"
            onClick={handleGuests}
          >
            remove
          </span>

          <span className="guest-quantity" id="adult-quantity">
            {numAdults}
          </span>

          <span
            className="material-icons-round plus-icon"
            id="add-adult"
            onClick={handleGuests}
          >
            add
          </span>
        </div>
      </li>

      <li className="child-container">
        <div className="guest-title-container">
          <h6 className="guest-title">Children</h6>
          <p className="helper-text">Ages 2-12</p>
        </div>

        <div className="guest-quantity-container">
          <span
            className="material-icons-round minus-icon"
            id="remove-child"
            onClick={handleGuests}
          >
            remove
          </span>

          <span className="guest-quantity" id="child-quantity">
            {numChildren}
          </span>

          <span
            className="material-icons-round plus-icon"
            id="add-child"
            onClick={handleGuests}
          >
            add
          </span>
        </div>
      </li>
    </ul>
  );
};
