import {createSelector} from 'reselect';
import {fromJS} from 'immutable';
import {shippingAddressInit} from './config';

export const auth = state => state.auth;
export const main = state => state.main;

export const authSelector = createSelector(auth, data => data.toJS());

export const isLoginSelector = createSelector(auth, data =>
  data.get('isLogin'),
);
export const isLoading = createSelector(auth, data => data.get('Loading'));
// export const userDetailsData = createSelector(auth, data => data.get('userDetail')
// );

/**
 * Get user id
 */
export const userIdSelector = createSelector(auth, data =>
  data.getIn(['user', 'ID']),
);

/**
 * Token selector
 * @type {OutputSelector<unknown, *, (res: *) => *>}
 */
export const tokenSelector = createSelector(auth, data => data.get('token'));


// export const userSelector = createSelector(main, data => data.get('userDetail'));
