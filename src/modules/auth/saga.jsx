import AsyncStorage from "@react-native-async-storage/async-storage";
import { put, call, takeEvery } from "redux-saga/effects";
import * as Actions from "./constants";
import NavigationService from "../../utils/navigation";
import { authStack, mainStack, rootSwitch } from "../../config/navigator";
import {
  createGame_Api,
  createTeam_Api,
  forgotPasswordWithMobile,
  getGame_Api,
} from "./service";
import simpleAlertCall from "../../utils/alerts";
import { signUp_Api, ResendSignUpApi } from "./service";
import { signUp_VerifyOtp_Api } from "./service";
import { signUp_UserDetailsInfo_Api } from "./service";
import { selectAvatar_Api } from "./service";
import { signIn_Api } from "./service";
import { forgotPassword_Api } from "./service";
import { forgotPasswordVerifyOtp_Api } from "./service";
import { setNewPassword_Api } from "./service";
import { createEvent_Api } from "./service";
import { existingUserList_Api } from "./service";
import { sendInvite_Api } from "./service";

function* signOutSuccess() {
  yield call(AsyncStorage.removeItem);
}

function* saveStorageItems(data) {
  try {
    yield call(
      AsyncStorage.setItem,
      "@userDetails",
      JSON.stringify(data?.data)
    );
    yield call(
      AsyncStorage.setItem,
      "@userData",
      JSON.stringify(data?.data?.user)
    );
    // yield call(AsyncStorage.setItem, "@token", data?.data?.token);
    yield call(AsyncStorage.setItem, "@isLoggedIn", JSON.stringify(true));
  } catch (error) {
    console.log(
      "🚀 ~ file: saga.js:33 ~ function*saveStorageItems ~ error:",
      error
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

function* initSaga(data) {
  const loggedIn = yield call(AsyncStorage.getItem, "@userDetails");
  if (loggedIn) {
    data.isLoggedIn = true;
  } else {
    data.isLoggedIn = false;
  }
  yield put({
    type: Actions.INIT_SUCCESS,
    payload: data,
  });
}

function* signUpWithMobileSagaSuccess(data) {
  simpleAlertCall(data?.message, () => {});
  yield put({
    type: Actions.SIGN_UP_WITH_MOBILE_SUCCESS,
    payload: data.data,
  });
  NavigationService.navigate(authStack.SmsOtpScreen, {
    screen: 1,
  });
}
function* signUpWithMobileSagaError(data) {
  yield put({
    type: Actions.SIGN_UP_WITH_MOBILE_ERROR,
  });
  simpleAlertCall(data, () => {});
}

// SignUp Verify Otp Success
function* signUpVerifyOtpSagaSuccess(data) {
  yield put({
    type: Actions.SIGN_UP_VERIFY_OTP_SUCCESS,
    payload: data.data,
  });
  NavigationService.navigate(authStack.OTPVerified, {
    screen: 1,
  });
}

// Resend OTP

function* resendOTPSaga(data) {
  if (data?.payload?.screen == 1) {
    yield resendOTP(data);
  } else if (data?.payload?.screen == 2) {
    yield forgotPasswordSaga(data);
  }
}

// SignUp UserDetails Info
function* signUpUserDetailsInfoSuccss(data) {
  yield call(saveStorageItems, data);
  yield put({
    type: Actions.SIGN_UP_USER_INFO_SUCCESS,
    payload: data.data,
  });
  NavigationService.replace(rootSwitch.main);
}

// SignUp Select Avatar
function* signUpSelectAvatarSuccss(data) {
  // console.log("signUpSelectAvatarSuccss", data)
  yield put({
    type: Actions.SIGNUP_SELECT_AVATAR_SUCCESS,
    payload: data,
  });
}

// SignIn Success Function
function* signInSuccess(data) {
  console.log("signInSuccess_saga", data);
  yield put({
    type: Actions.SIGN_IN_SUCCESS,
    payload: data.data,
  });
  NavigationService.replace(rootSwitch.main);
}

// Forgot Password with Mobile
function* forgotPasswordSuccess(data) {
  simpleAlertCall(data?.message, () => {});
  yield put({
    type: Actions.FORGOT_PASSWORD_SUCCESS,
    payload: data.data,
  });
  NavigationService.navigate(authStack.SmsOtpScreen, {
    screen: 2,
  });
}

// Forgot Password Verify Otp
function* forgotPassword_VerifyOtp_Success(data) {
  yield put({
    type: Actions.FORGOT_PASSWORD_VERIFY_OTP_SUCCESS,
    payload: data.data,
  });
  NavigationService.navigate(authStack.OTPVerified, {
    screen: 2,
  });
}

// Set New Password
function* setNewPasswordSuccess(data) {
  yield put({
    type: Actions.SET_NEW_PASSWORD_SUCCESS,
    payload: data.data,
  });
  NavigationService.navigate(authStack.SignIn);
}

// Main flow - Create Event
function* createEventSuccess(data) {
  // console.log("createEventSuccess_saga",data)
  yield put({
    type: Actions.CREATE_EVENT_SUCCESS,
    payload: data.data,
  });
  NavigationService.navigate(mainStack.InvitePeople);
}

// SignUp Select Avatar
function* existingUserListSuccess(data) {
  // console.log("existingUserListSuccess", data)
  yield put({
    type: Actions.EXISTING_USER_LIST_SUCCESS,
    payload: data,
  });
}
// Send Invite
function* sendInviteSuccess(data) {
  console.log("sendInviteSuccess_saga", data);
  yield put({
    type: Actions.SEND_INVITE_SUCCESS,
    payload: data.data,
  });
  // NavigationService.navigate();
}
function* getGameSuccess(data) {
  console.log("getGameSuccess", data);
  yield put({
    type: Actions.GET_GAME_SUCCESS,
    payload: data.data,
  });
  // NavigationService.navigate();
}
function* createGameSuccess(data) {
  yield put({
    type: Actions.CREATE_GAME_SUCCESS,
    payload: data?.data,
  });
}
function* createGameBodySuccess(data) {
  yield put({
    type: Actions.CREATE_GAME_BODY_SUCCESS,
    payload: data,
  });
}
function* createTeamSuccess(data) {
  yield put({
    type: Actions.CREATE_TEAM_SUCCESS,
    payload: data,
  });
  NavigationService.replace("CameraInfo");
}

/**
 * Sign In saga
 * @param username
 * @param password
 * @returns {IterableIterator<*>}
 */
function* signInWithEmailSaga({ username, password }) {
  try {
    const { data } = yield call(loginWithEmail, {
      username,
      password,
    });

    yield call(doLoginSuccess, "data.token", user, "email");
  } catch (e) {
    yield put({
      type: Actions.SIGN_IN_WITH_EMAIL_ERROR,
      payload: {
        message: e.message,
      },
    });
  }
}

// SignUp With Mobile

function* signUpWithMobileSaga({ payload }) {
  try {
    const { data } = yield call(signUp_Api, {
      payload,
    });
    yield call(signUpWithMobileSagaSuccess, data);
  } catch (e) {
    console.log("error", e);
    yield call(signUpWithMobileSagaError, e);
  }
}

function* resendOTP({ payload }) {
  try {
    const { data } = yield call(ResendSignUpApi, {
      payload,
    });
    yield call(signUpWithMobileSagaSuccess, data);
  } catch (e) {
    console.log("error", e);
    yield call(signUpWithMobileSagaError, e);
  }
}

// SignUp Verify Otp
function* signUpVerifyOtpSaga({ payload }) {
  // console.log("signUpVerifyOtpSaga_Saga...", payload)
  try {
    const { data } = yield call(signUp_VerifyOtp_Api, {
      payload,
    });
    yield call(saveStorageItems, data);
    yield call(signUpVerifyOtpSagaSuccess, data);
  } catch (e) {
    alert("e");
    yield call(signUpWithMobileSagaError, e);
  }
}

// SignUp UserDetails Info
function* signUpUserDetailsInfoSaga({ payload }) {
  // console.log("signUpUserDetailsInfoSaga_Saga", payload)
  try {
    const { data } = yield call(signUp_UserDetailsInfo_Api, {
      payload,
    });
    yield call(signUpUserDetailsInfoSuccss, data);
  } catch (e) {
    yield call(signUpWithMobileSagaError, e);
    console.log(
      "🚀 ~ file: saga.js:100 ~ function*signUpUserDetailsInfoSaga ~ e:",
      e
    );
  }
}

// SignUp Select Avatar
function* signUpSelectAvatarSaga({ payload }) {
  try {
    const { data } = yield call(selectAvatar_Api, {
      payload,
    });
    yield call(signUpSelectAvatarSuccss, data);
  } catch (e) {
    yield call(signUpWithMobileSagaError, e);
    console.log(
      "🚀 ~ file: saga.js:190 ~ function*signUpSelectAvatarSaga ~ e:",
      e
    );
  }
}

// SignIn Api
function* signInSaga({ payload }) {
  try {
    const { data } = yield call(signIn_Api, {
      payload,
    });
    // console.log("siiignnn",payload)
    // Save user data to local storage or cookies to persist the session
    //  AsyncStorage.setItem('keeploggedIn', JSON.stringify(data));
    // console.log("signinnnnn_UserName_Password", payload?.userInfo, payload?.password)
    yield call(saveStorageItems, data);
    yield call(signInSuccess, data);
    yield call(signUpSelectAvatarSuccss, data);
  } catch (e) {
    yield call(signUpWithMobileSagaError, e);
    console.log("🚀 ~ file: saga.js:130~ function*signInSaga* ~ e:", e);
  }
}

// Forgot Password with Mobile
function* forgotPasswordSaga({ payload }) {
  // console.log("forgotPasswordSaga",payload)
  try {
    const { data } = yield call(forgotPassword_Api, {
      payload,
    });
    yield call(forgotPasswordSuccess, data);
  } catch (e) {
    yield call(signUpWithMobileSagaError, e);
    console.log("🚀 ~ file: saga.js:160~ function*forgotPasswordSaga* ~ e:", e);
  }
}

// Forgot Password Verify otp
function* forgotPasswordVerifyOtpSaga({ payload }) {
  try {
    const { data } = yield call(forgotPasswordVerifyOtp_Api, {
      payload,
    });
    console.log(
      "🚀 ~ file: saga.js:347 ~ function*forgotPasswordVerifyOtpSaga ~ data:",
      data
    );
    yield call(saveStorageItems, data);
    yield call(forgotPassword_VerifyOtp_Success, data);
  } catch (e) {
    yield call(signUpWithMobileSagaError, e);
    console.log(
      "🚀 ~ file: saga.js:185~ function*forgotPasswordVerifyOtpSuccess* ~ e:",
      e
    );
  }
}

// Set New Password
function* setNewPasswordSaga({ payload }) {
  // console.log("setNewPasswordSaga",payload)
  try {
    const { data } = yield call(setNewPassword_Api, {
      payload,
    });
    yield call(setNewPasswordSuccess, data);
  } catch (e) {
    yield call(signUpWithMobileSagaError, e);
    console.log("🚀 ~ file: saga.js:220~ function*setNewPasswordSaga* ~ e:", e);
  }
}

//  Main Flow  - Create Event API
function* createEventSaga({ payload }) {
  console.log("createEventSaga");
  try {
    const { data } = yield call(createEvent_Api, {
      payload,
    });
    // yield call(saveStorageItems, payload);
    yield call(createEventSuccess, data);
  } catch (e) {
    yield call(signUpWithMobileSagaError, e);
    // console.log("🚀 ~ file: saga.js:308~ function*createEventSaga* ~ e:", e);
  }
}

// Existing User List
function* existingUserListSaga({ text }) {
  // const { text } = payload
  console.log(
    "🚀 ~ file: saga.js:359 ~ function*existingUserListSaga ~ payload:",
    text
  );
  try {
    const { data } = yield call(existingUserList_Api, {
      text,
    });
    yield call(existingUserListSuccess, data);
  } catch (e) {
    yield call(signUpWithMobileSagaError, e);
    console.log(
      "🚀 ~ file: saga.js:342 ~ function*existingUserListSaga ~ e:",
      e
    );
  }
}

// Send Invite to existing user api
function* sendInviteSaga({ payload }) {
  console.log("paylaod", payload);
  const { empty } = payload;
  try {
    if (empty == 1) {
      yield call(sendInviteSuccess, {});
    } else {
      const { data } = yield call(sendInvite_Api, {
        payload,
      });
      console.log(
        "🚀 ~ file: saga.js:382 ~ function*sendInviteSaga ~ data:",
        JSON.stringify(data)
      );
      yield call(sendInviteSuccess, data);
    }
  } catch (e) {
    yield call(signUpWithMobileSagaError, e);
    console.log("🚀 ~ file: saga.js:369~ function*sendInviteSaga* ~ e:", e);
  }
}
function* getGame({ payload }) {
  console.log("🚀 ~ file: saga.js:393 ~ function*getGame ~ payload:", payload);
  try {
    const { data } = yield call(getGame_Api, {
      payload,
    });
    yield call(getGameSuccess, data);
  } catch (error) {
    console.log("🚀 ~ file: saga.js:398 ~ function*getGame ~ error:", error);
  }
}
function* createGame({ payload }) {
  // console.log("🚀 ~ file: saga.js:429 ~ function*createGame ~ payload:", payload)
  try {
    const data = yield call(createGame_Api, {
      payload,
    });
    // console.log("🚀 ~ file: saga.js:434 ~ function*createGame ~ data:", data)
    yield call(createGameSuccess, data);
  } catch (error) {
    console.log("🚀 ~ file: saga.js:424 ~ function*createGame ~ error:", error);
  }
}

function* createTeam({ payload }) {
  try {
    const { data } = yield call(createTeam_Api, {
      payload,
    });
    yield call(createTeamSuccess, data);
  } catch (error) {
    console.log("🚀 ~ file: saga.js:445 ~ createTeam ~ error:", error);
  }
}
function* creaeGameBody({ payload }) {
  // console.log("🚀 ~ file: saga.js:433 ~ function*creaeGameBody ~ paylaod:", payload)
  // const gameBody = { ...payload }
  if (payload) {
    yield call(createGameBodySuccess, payload);
  }
}

export default function* authSaga() {
  yield takeEvery(Actions.INIT, initSaga);
  yield takeEvery(Actions.SIGN_UP_WITH_MOBILE, signUpWithMobileSaga);
  yield takeEvery(Actions.SIGN_UP_VERIFY_OTP, signUpVerifyOtpSaga);
  yield takeEvery(Actions.SIGN_UP_USER_INFO, signUpUserDetailsInfoSaga);
  yield takeEvery(Actions.SIGNUP_SELECT_AVATAR, signUpSelectAvatarSaga);
  yield takeEvery(Actions.SIGN_IN, signInSaga);
  yield takeEvery(Actions.FORGOT_PASSWORD, forgotPasswordSaga);
  yield takeEvery(
    Actions.FORGOT_PASSWORD_VERIFY_OTP,
    forgotPasswordVerifyOtpSaga
  );
  yield takeEvery(Actions.SET_NEW_PASSWORD, setNewPasswordSaga);
  yield takeEvery(Actions.SIGNUP_RESEND_OTP, resendOTPSaga);

  yield takeEvery(Actions.CREATE_EVENT, createEventSaga);
  yield takeEvery(Actions.EXISTING_USER_LIST, existingUserListSaga);
  yield takeEvery(Actions.SEND_INVITE, sendInviteSaga);
  yield takeEvery(Actions.GET_GAME, getGame);
  yield takeEvery(Actions.CREATE_GAME, createGame);
  yield takeEvery(Actions.CREATE_GAME_BODY, creaeGameBody);
  yield takeEvery(Actions.CREATE_TEAM, createTeam);
  // yield takeEvery(Actions.SEND_INVITE_SUCCESS, sendInviteSuccess);
}
