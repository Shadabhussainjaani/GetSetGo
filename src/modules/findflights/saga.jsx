import AsyncStorage from '@react-native-async-storage/async-storage';
import { put, call, takeEvery } from 'redux-saga/effects';
import * as Actions from './constants';
import NavigationService from '../../utils/navigation';
import { getAllFlightsDetailsApi } from './service';

function* signOutSuccess() {
  yield call(AsyncStorage.removeItem);
}

function* saveStorageItems(data) {
  try {
    yield call(
      AsyncStorage.setItem,
      '@userDetails',
      JSON.stringify(data?.data),
    );
    yield call(
      AsyncStorage.setItem,
      '@userData',
      JSON.stringify(data?.data?.user),
    );
    yield call(AsyncStorage.setItem, '@isLoggedIn', JSON.stringify(true));
  } catch (error) {
    console.log(
      '🚀 ~ file: saga.js:33 ~ function*saveStorageItems ~ error:',
      error,
    );
  }
}

/**
 * Login Stack Saga * Shadab Hussain
 * Do login success
 * @param token
 * @param user
 * @returns {IterableIterator<*>}
 */

function* getAllFlightsDetailsSaga({ payload }) {
  NavigationService.navigate('flightDetails', {
    payload,
  });
  try {
    const { data } = yield call(getAllFlightsDetailsApi);
    yield put({
      type: Actions.GET_ALL_FLIGHTS_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log(
      '🚀 ~ file: saga.jsx:64 ~ function*getAllFlightsDetailsSaga ~ error:',
      error,
    );
  }
  // const loggedIn = yield call(AsyncStorage.getItem, "@userDetails");
  // if (loggedIn) {
  //   data.isLoggedIn = true;
  // } else {
  //   data.isLoggedIn = false;
  // }
  // yield put({
  //   type: Actions.INIT_SUCCESS,
  //   payload: data,
  // });
}

export default function* findFlights() {
  yield takeEvery(Actions.GET_ALL_FLIGHTS_DETAILS, getAllFlightsDetailsSaga);
}
