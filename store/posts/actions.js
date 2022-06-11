import { SUCCESS_STATE, ERROR_STATE, START_STATE } from "./types";

export const API = "https://testapinextjs.pythonanywhere.com/";

import axios from "axios";

export const getStates = () => async (dispatch, getState) => {
  dispatch({ type: START_STATE });
  axios.get(`${API}/country/country/`)
  .then((res) => {
    dispatch({ type: SUCCESS_STATE, payload: res.data });
  })
  .catch(err => {
      dispatch({type: ERROR_STATE, payload: err.message})
  })
  ;
};

export const saveDataItem = (itemType, data) => (dispatch) => {
  dispatch({type: itemType, payload: data})
  window.localStorage.setItem(`_item__${itemType}`, JSON.stringify(data))
}


