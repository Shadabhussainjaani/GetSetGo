import { fromJS } from 'immutable';
import * as Actions from './constants';

const initState = fromJS({
  isLogin: false,
  apiLoad: false,
  flightDetails: {},
});
export default function flightsReducer(state = initState, action = {}) {
  switch (action.type) {
    case Actions.GET_ALL_FLIGHTS_DETAILS:
      return {
        ...state,
        apiLoad: true,
      };

    case Actions.GET_ALL_FLIGHTS_DETAILS_SUCCESS:
      console.log(
        '🚀 ~ file: reducer.jsx:23 ~ flightsReducer ~ action.payload?.data:',
        JSON.stringify(action.payload?.data),
      );
      return {
        ...state,
        apiLoad: false,
        flightDetails: action.payload?.data,
      };

    // return state
    //   .set('apiLoad', false)
    //   .set('flightDetails', action.payload?.data);

    default:
      return state;
  }
}
