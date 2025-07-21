import { useState, useEffect } from 'react';
import Places from './Places.jsx';
import ErrorPage from './Error.jsx';
import { sortPlacesByDistance } from '../loc.js';
import { fetchAvailablePlaces } from '../http.js';

export default function AvailablePlaces({ onSelectPlace }) {
  const [isFetching, setIsFetching] = useState(false);
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchPlaces() {
      setIsFetching(true);

      try {
        const places = await fetchAvailablePlaces();

        // not working
        // navigator.geolocation.getCurrentPosition((position) => {
        //   const sortedPlaces = sortPlacesByDistance(resData.places, position.coords.latitude, position.coords.longitude);
        // });

        setAvailablePlaces(places);
        setIsFetching(false);

      } catch (error) {
        setError({ message: error.message || "Could not fetch places, pleasy try again later" });
      }

    }

    fetchPlaces();
  }, [])

  if (error) {
    return <ErrorPage title="An error occured!" message={error.message} />
  }

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isFetching}
      loadingText="Fetching place data..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
