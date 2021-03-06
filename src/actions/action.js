/**
 * Created by thomashourlier on 2/26/17.
 */

import axios from 'axios';

export function fetchJedi() {
  return (dispatch) => {
    axios.get('http://localhost:3001/jedi')
      .then((res) => {
        
        dispatch({
          type: 'FETCH_FINISH',
          payload: res.data,
        });
      })
  }
}

export function addJedi(name) {
  /*
  sends a post request to add a new jedi
  */
  return (dispatch) => {
    axios.post('http://localhost:3001/jedi', {name})
      .then((res) => {
        console.log(res.data)
        dispatch({
          type: 'ADD_FINISH',
          payload: res.data,
        });
      })
  }
}