import * as Actions from './constants';

/**
 * Action login
 * @param username
 * @param password
 * @returns {{type: string, username: *, password: *}}
 */
export function signInWithEmail({ username, password }) {
  return {
    type: Actions.SIGN_IN_WITH_EMAIL,
    username,
    password,
  };
}
export function init({ loading }) {
  // console.log("=====>" , loading);
  return {
    type: Actions.INIT,
    loading,
  };
}
export function userDetails({ data }) {
  // console.log("=====>" , data);
  return {
    type: Actions.USER_DETAILS,
    data,
  };
}
export function scheduleEvents({ payload }) {
  console.log('scheduleEvents_action', payload);
  return {
    type: Actions.SCHEDULE_EVENT,
    payload,
  };
}
export function scoreKeeperNames({ payload }) {
  return {
    type: Actions.SCORE_KEEPER_NAMES,
    payload,
  };
}
export function playasTeamOrIndividual({ payload }) {
  return {
    type: Actions.PLAY_AS_TEAM,
    payload,
  };
}
export function manuallyScores({ data }) {
  return {
    type: Actions.MANUALLY_SCORE,
    data,
  };
}
export function roundAndPoints({ payload }) {
  // console.log("roundAndPoint", payload);
  return {
    type: Actions.ROUND_AND_POINTS,
    payload,
  };
}
export function invitedAllPlayers({ payload }) {
  return {
    type: Actions.INVITED_PLAYERS,
    payload,
  };
}
export function editTeamNames({ payload }) {
  // console.log("EDITTEAM_NAMES", payload);
  return {
    type: Actions.EDITTEAM_NAMES,
    payload,
  };
}
export function playersTeamSelections({ payload }) {
  // console.log("TEAM_SELECTION", payload);
  return {
    type: Actions.TEAM_SELECTION,
    payload,
  };
}
export function selectedPlayers({ payload }) {
  // console.log("SELECTED_PLAYER", payload);
  return {
    type: Actions.SELECTED_PLAYER,
    payload,
  };
}
export function teamsData({ payload }) {
  // console.log("TEAMS_DATA", payload);
  return {
    type: Actions.TEAMS_DATA,
    payload,
  };
}

export function addEventMemory({ payload }) {
  console.log('addEventMemory_Action', payload);
  return {
    type: Actions.ADD_EVENT_MEMORY,
    payload,
  };
}

/**
 * Action login mobile
 * @param tokenId
 * @returns {{type: string, tokenId}}
 */

// SigUp
export function signUpWithMobiles({ payload }) {
  return {
    type: Actions.SIGN_UP_WITH_MOBILE,
    payload,
  };
}

export function signUpWithMobileSuccess({ payload }) {
  return {
    type: Actions.SIGN_UP_WITH_MOBILE_SUCCESS,
    payload,
  };
}

// SignUp Verify Otp
export function signUpVerifyOTP({ payload }) {
  return {
    type: Actions.SIGN_UP_VERIFY_OTP,
    payload,
  };
}

export function signUpVerifyOtpSuccss({ payload }) {
  return {
    type: Actions.SIGN_UP_VERIFY_OTP_SUCCESS,
    payload,
  };
}

export function resendOTPSignIn({ payload }) {
  return {
    type: Actions.SIGNUP_RESEND_OTP,
    payload,
  };
}

// SignUp UserDetails Info
export function signUpUserDetailsInfo({ payload }) {
  return {
    type: Actions.SIGN_UP_USER_INFO,
    payload,
  };
}
export function signUpUserDetailsInfoSuccss({ payload }) {
  return {
    type: Actions.SIGN_UP_USER_INFO_SUCCESS,
    payload,
  };
}

// SignUp Select Avatar (GET API)
export function signUpSelectAvatar() {
  return {
    type: Actions.SIGNUP_SELECT_AVATAR,
  };
}
export function signUpSelectAvatarSuccss() {
  return {
    type: Actions.SIGNUP_SELECT_AVATAR_SUCCESS,
  };
}

// SignIn Api
export function signIn({ payload }) {
  console.log('signIn_action', payload);
  return {
    type: Actions.SIGN_IN,
    payload,
  };
}
export function signInSuccess({ payload }) {
  return {
    type: Actions.SIGN_IN_SUCCESS,
    payload,
  };
}

// Forgot Password with Mobile
export function forgotPassword({ payload }) {
  return {
    type: Actions.FORGOT_PASSWORD,
    payload,
  };
}
export function forgotPasswordSuccess({ payload }) {
  return {
    type: Actions.FORGOT_PASSWORD_SUCCESS,
    payload,
  };
}

// Forgot Password Verify Otp
export function forgotPasswordVerifyOtp({ payload }) {
  console.log('FORGOT_PASSWORD_VERIFY_OTP___Action', payload);
  return {
    type: Actions.FORGOT_PASSWORD_VERIFY_OTP,
    payload,
  };
}
export function forgotPasswordVerifyOtpSuccess({ payload }) {
  return {
    type: Actions.FORGOT_PASSWORD_VERIFY_OTP_SUCCESS,
    payload,
  };
}

// Set New Password
export function setNewPassword({ payload }) {
  // console.log("setNewPassword_Action", payload);
  return {
    type: Actions.SET_NEW_PASSWORD,
    payload,
  };
}
export function setNewPasswordSuccess({ payload }) {
  return {
    type: Actions.SET_NEW_PASSWORD_SUCCESS,
    payload,
  };
}

//Main Flow
export function createEvent({ payload }) {
  // console.log("createEvent_Action", payload);
  return {
    type: Actions.CREATE_EVENT,
    payload,
  };
}
export function getGame({ payload }) {
  // console.log("createEvent_Action", payload);
  return {
    type: Actions.GET_GAME,
    payload,
  };
}
export function createGameBody(payload) {
  console.log('🚀 ~ file: actions.js:257 ~ createGameBody ~ payload:', payload);
  return {
    type: Actions.CREATE_GAME_BODY,
    payload,
  };
}
export function createEventSuccess({ payload }) {
  return {
    type: Actions.CREATE_EVENT_SUCCESS,
    payload,
  };
}

// Existing User List (GET API)
export function existingUserList(text) {
  return {
    type: Actions.EXISTING_USER_LIST,
    text,
  };
}
export function existingUserListSuccess() {
  return {
    type: Actions.EXISTING_USER_LIST_SUCCESS,
  };
}

export function sendInvite({ payload }) {
  // console.log("sendInvite_Action", payload);
  return {
    type: Actions.SEND_INVITE,
    payload,
  };
}
export function sendInviteSuccess({ payload }) {
  return {
    type: Actions.SEND_INVITE_SUCCESS,
    payload,
  };
}
export function createGame({ payload }) {
  return {
    type: Actions.CREATE_GAME,
    payload,
  };
}
export function createTeam({ payload }) {
  return {
    type: Actions.CREATE_TEAM,
    payload,
  };
}
export function clearStateData() {
  return {
    type: Actions.CLEAR_SEND_INVITE_SUCCESS,
  };
}

/**
 * Action register
 * @param data
 * @returns {{type: string, payload: *}}
 */
export function signUpWithEmail(data) {
  return {
    type: Actions.SIGN_UP_WITH_EMAIL,
    payload: {
      data,
    },
  };
}

/**
 * Login with google
 * @param idToken
 * @returns {{type: string, payload: {data: *}}}
 */
export function signInWithGoogle(idToken) {
  return {
    type: Actions.SIGN_IN_WITH_GOOGLE,
    payload: {
      idToken,
    },
  };
}

/**
 * Action login google cancel
 */
export function signInWithGoogleCancel() {
  return {
    type: Actions.SIGN_IN_WITH_GOOGLE_CANCEL,
  };
}

/**
 * Action login by Facebook
 * @param data
 * @returns {{type: string, payload: *}}
 */
export function signInWithFacebook(data) {
  return {
    type: Actions.SIGN_IN_WITH_FACEBOOK,
    payload: {
      data,
    },
  };
}

/**
 * Action login facebook cancel
 */
export function signInWithFacebookCancel() {
  return {
    type: Actions.SIGN_IN_WITH_GOOGLE_CANCEL,
  };
}

/**
 * validate login
 * @returns {{type: string}}
 */
export function isLogin() {
  return {
    type: Actions.IS_LOGIN,
  };
}

// export function forgotPassword(email) {
//   return {
//     type: Actions.FORGOT_PASSWORD,
//     email,
//   };
// }

export function checkAuth() {
  return {
    type: Actions.CHECK_AUTH,
  };
}

/**
 * Change email action
 * @param u_password
 * @param u_email
 * @returns {{type: string, payload: {password: *, email: *}}}
 */
export function changeEmail({ u_password, u_email }) {
  return {
    type: Actions.CHANGE_EMAIL,
    payload: {
      u_password,
      u_email,
    },
  };
}

/**
 * Get customer
 * @param id
 * @param cb
 * @returns {{type: string, payload: {id: *, cb: *}}}
 */
export function fetchCustomer(id, cb = () => {}) {
  return {
    type: Actions.GET_CUSTOMER,
    payload: {
      id,
      cb,
    },
  };
}

/**
 * Update customer
 * @param data
 * @returns {{type: string, payload: {data: *, cb: *}}}
 */
export function updateCustomer(data, cb = () => {}) {
  return {
    type: Actions.UPDATE_CUSTOMER,
    payload: {
      data,
      cb,
    },
  };
}

/**
 * Update user
 * @param data
 * @returns {{type: string, payload: *}}
 */
export function updateShippingAddressSuccess(data) {
  return {
    type: Actions.UPDATE_SHIPPING_ADDRESS_SUCCESS,
    payload: data,
  };
}

/**
 * Update user
 * @param data
 * @returns {{type: string, payload: *}}
 */
export function updateUserSuccess(data) {
  return {
    type: Actions.UPDATE_USER_SUCCESS,
    payload: data,
  };
}

/**
 * Change password action
 * @param data
 * @returns {{type: string, payload: object}}
 */
export function changePassword(data) {
  return {
    type: Actions.CHANGE_PASSWORD,
    payload: data,
  };
}

/**
 * Action sign out
 * @returns {{type: string}}
 */
export function signOut() {
  return {
    type: Actions.SIGN_OUT,
  };
}

/**
 * SignIn with Apple
 * @param identityToken
 * @param user
 * @returns {{payload: {identityToken: *, user: *}, type: string}}
 */
export function signInWithApple(payload) {
  return {
    type: Actions.SIGN_IN_WITH_APPLE,
    payload,
  };
}

/**
 * Sign Up with OTP
 * @param data
 * @returns {{type: string, payload: *}}
 */
export function signUpWithOtp(data) {
  return {
    type: Actions.SIGN_UP_WITH_OTP,
    payload: {
      data,
    },
  };
}

/**
 * Sign In with OTP
 * @param data
 * @returns {{payload: {identityToken: *, user: *}, type: string}}
 */
export function signInWithOtp(data) {
  return {
    type: Actions.SIGN_IN_WITH_OTP,
    payload: {
      data,
    },
  };
}

/**
 * Get List file download of user
 * @param data
 * @returns {{type: string, payload: *}}
 */
export function getFilesDonwload() {
  return {
    type: Actions.GET_LIST_FILE_DOWNLOAD,
    payload: {},
  };
}
