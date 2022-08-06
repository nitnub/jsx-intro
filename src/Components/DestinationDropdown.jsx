import React, { useReducer, useEffect } from 'react';
import axios from 'axios';

const initialState = {
  loading: false, //we're not loading to begin with
  error: '',
  places: [], // we will hopefully get back an array of data
  locationSearch: '',
  search: false, // wether or not we are searching
};
// takes inital state and an action
const reducer = (state, action) => {
  // we're going to assess actio nas an object and it's property type
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return {
        ...state, //what this state is in this exact moment, then we can override anything as needed explicitly
        loading: false,
        locationSearch: '',
        places: action.payload,
      };
    case 'FETCH_ERROR':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case 'UPDATE_LOCATION':
      return {
        ...state,
        locationSearch: action.payload,
      };
    case 'UPDATE_LOADING':
      return {
        ...state,
        loading: action.payload,
      };
    case 'UPDATE_SEARCH':
      return {
        ...state,
        search: action.payload,
      };
    default:
      return state;
  }
};

export const DestinationDropdown = () => {
  const [state, dispatch] = useReducer(reducer, initialState); // takes the function we created above.

  useEffect(() => {
    if (state.search) {
      dispatch({ type: 'UPDATE_LOADING', payload: true });
      axios
        .get(
          `https://nominatim.openstreetmap.org/search.php?city=${state.locationSearch}&format=jsonv2`
        )
        .then((response) =>
          dispatch({ type: 'FETCH_SUCCESS', payload: response.data })
        ) // always do this to see what my data shape looks like in case I need to alter anything
        .catch((error) => {
          console.error(error); // I tend to do this in errors, logs arent helpful for users, when a support rep sees this they can give the dev more info on a support call
          dispatch({ type: 'FETCH_ERROR', payload: 'An error occurred' });
        });
    }
    dispatch({
      type: 'UPDATE_SEARCH',
      payload: false,
    });
  }, [state.search]); // will listen to search and fire when it flips

  return (
    <>
      // labels let the screen reader associate the right label with the right
      input
      <label htmlFor="destination-search">Search for a destination</label>
      <input
        name="destination-search"
        value={state.locationSearch}
        type="text"
        onChange={(e) =>
          dispatch({
            type: 'UPDATE_LOCATION',
            payload: e.target.value,
          })
        }
      />
      <button
        onClick={() =>
          dispatch({
            type: 'UPDATE_SEARCH',
            payload: true,
          })
        }
      >
        Search
      </button>
      <label htmlFor="destination-dropdown">
        Select your preferred destination
      </label>
      {state.loading ? (
        'Loading...'
      ) : (
        <select disabled={!state.places.length > 0} name="destination-dropdown">
          {state.places?.length > 0 &&
            state.places.map((place) => {
              return (
                <option key={place.place_id} value={place.display_name}>
                  {place.display_name}
                </option>
              );
            })}
        </select>
      )}
    </>
  );
};
