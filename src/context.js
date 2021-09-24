import React, { useState, useContext, useEffect } from 'react';
import data from './stays.json';

const AppContext = React.createContext();
const allLocations = [
  ...new Set(
    data.map((item) => {
      return item.city + ', ' + item.country;
    })
  ),
];

const AppProvider = ({ children }) => {
  const [places, setPlaces] = useState(data);
  const [locations] = useState(allLocations);
  const [showModal, setShowModal] = useState(false);
  const [filterType, setFilterType] = useState('location');
  const [currentLocation, setCurrentLocation] = useState('');
  const [numGuests, setNumGuests] = useState(0);

  const handleShowModal = (e) => {
    if (e.target.id === 'location' || e.target.id === 'guest') {
      setShowModal(!showModal);
      handleFilterType(e);
    } else if (e.target.id === 'close') {
      setShowModal(false);
    }
  };
  const handleFilterType = (e) => {
    setFilterType(e.target.id);
  };
  const handleLocation = (e) => {
    setCurrentLocation(e.target.id);
  };
  const handleNumGuests = (newNumGuests) => {
    setNumGuests(newNumGuests);
  };
  const handleFilter = () => {
    const currentCity = currentLocation.split(',')[0];
    const newPlaces = places.filter(
      (place) => place.maxGuests >= numGuests && place.city === currentCity
    );
    setPlaces(newPlaces);
    setShowModal(false);
  };

  // useEffect(() => {
  //   setPlaces(data);
  //   setNumGuests(0);
  // }, [handleShowModal])

  return (
    <AppContext.Provider
      value={{
        places,
        locations,
        showModal,
        handleShowModal,
        filterType,
        handleFilterType,
        currentLocation,
        handleLocation,
        numGuests,
        setNumGuests,
        handleNumGuests,
        handleFilter,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
