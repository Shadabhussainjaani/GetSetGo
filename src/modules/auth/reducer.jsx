import { fromJS } from "immutable";

import { REHYDRATE } from "redux-persist/lib/constants";
import * as Actions from "./constants";
import { notificationMessage } from "../../utils/error";

const initState = fromJS({
  isLogin: false,
  Loading: true,
  userDetail: {},
  scheduleEvent: {},
  scoreKeeperName: {},
  playasTeamOrIndividual: {},
  manuallyScore: {},
  roundAndPoint: {},
  invitedAllPlayer: {},
  editTeamName: {},
  playersTeamSelection: {},
  selectedPlayer: {},
  apiLoad: false,
  signUpWithMobileSuccess: {},
  signUpVerifyOtps: {},
  signUpVerifyOtpSuccss: {},
  teamData: {},
  addEventMemory: {},
  clearStateData: {},

  // auth api
  signupDetails: {},
  signUpWithMobile: {},
  signUpUserDetailsInfo: {},
  signUpUserDetailsInfoSuccss: {},
  signUpSelectAvatar: {},
  signUpSelectAvatarSuccss: {},
  signUpUserDetailsInfoSuccss: {},
  signIn: {},
  signInSuccess: {},
  forgotPassword: {},
  forgotPasswordSuccess: {},
  forgotPasswordVerifyOtp: {},
  forgotPasswordVerifyOtpSuccess: {},
  setNewPassword: {},
  setNewPasswordSuccess: {},

  createEvent: {},
  createEventSuccess: {},
  existingUser: {},
  existingUserListSuccess: {},
  sendInvite: {},
  sendInviteSuccess: {},
  createGameBodySuccess: {},
});
// set("Loading",false);
export default function authReducer(state = initState, action = {}) {
  switch (action.type) {
    case Actions.INIT_SUCCESS:
      return state
        .set("Loading", action?.payload?.loading)
        .set("isLogin", action.payload?.isLoggedIn);
    case Actions.USER_DETAILS:
      return state.set("userDetail", action.data);
    case Actions.SCHEDULE_EVENT:
      return state.set("scheduleEvent", action.payload);
    case Actions.SCORE_KEEPER_NAMES:
      return state.set("scoreKeeperName", action.payload);
    case Actions.PLAY_AS_TEAM:
      return state.set("playasTeamOrIndividual", action.payload);
    case Actions.MANUALLY_SCORE:
      return state.set("manuallyScore", action.data);
    case Actions.ROUND_AND_POINTS:
      return state.set("roundAndPoint", action.payload);
    case Actions.INVITED_PLAYERS:
      // console.log("in INVITED_PLAYERS",action.payload)
      return state.set("invitedAllPlayer", action.payload);
    case Actions.EDITTEAM_NAMES:
      return state.set("editTeamName", action.payload);
    case Actions.SELECTED_PLAYER:
      return state.set("selectedPlayer", action.payload);

    case Actions.ADD_EVENT_MEMORY:
      console.log("addEventMemory_Reducer", action.payload);
      return state.set("addEventMemory", action.payload);

    // Authentication
    case Actions.SIGN_UP_WITH_MOBILE:
      // console.log("SignUp_reducer",action.payload)
      return state.set("signUpWithMobile", action.payload).set("apiLoad", true);
    case Actions.SIGN_UP_WITH_MOBILE_SUCCESS:
      return state
        .set("signUpWithMobileSuccess", action.payload)
        .set("apiLoad", false);
    case Actions.SIGN_UP_WITH_MOBILE_ERROR:
      return state.set("apiLoad", false);

    case Actions.SIGN_UP_VERIFY_OTP:
      return state.set("signUpVerifyOtps", action.payload).set("apiLoad", true);
    case Actions.SIGN_UP_VERIFY_OTP_SUCCESS:
      return state
        .set("signUpVerifyOtpSuccss", action.payload)
        .set("apiLoad", false);
    case Actions.SIGN_UP_USER_INFO:
      // console.log("UserDetailsInfo_reducer",action.payload)
      return state
        .set("signUpUserDetailsInfo", action.payload)
        .set("apiLoad", true);
    case Actions.SIGN_UP_USER_INFO_SUCCESS:
      return state
        .set("signUpUserDetailsInfoSuccss", action.payload)
        .set("apiLoad", false)
        .set("isLogin", true);
    case Actions.SIGNUP_SELECT_AVATAR:
      return state
        .set("signUpSelectAvatar", action.payload)
        .set("apiLoad", true);
    case Actions.SIGNUP_SELECT_AVATAR_SUCCESS:
      return state
        .set("signUpSelectAvatarSuccss", action.payload)
        .set("apiLoad", false);
    case Actions.SIGN_IN:
      return state.set("signIn", action.payload).set("apiLoad", true);
    case Actions.SIGN_IN_SUCCESS:
      return state
        .set("signInSuccess", action.payload)
        .set("apiLoad", false)
        .set("isLogin", true);
    case Actions.FORGOT_PASSWORD:
      return state.set("forgotPassword", action.payload).set("apiLoad", true);
    case Actions.FORGOT_PASSWORD_SUCCESS:
      return state
        .set("forgotPasswordSuccess", action.payload)
        .set("apiLoad", false);
    case Actions.FORGOT_PASSWORD_VERIFY_OTP:
      return state
        .set("forgotPasswordVerifyOtp", action.payload)
        .set("apiLoad", true);
    case Actions.FORGOT_PASSWORD_VERIFY_OTP_SUCCESS:
      return state
        .set("forgotPasswordVerifyOtpSuccess", action.payload)
        .set("apiLoad", false);
    case Actions.SET_NEW_PASSWORD:
      return state.set("setNewPassword", action.payload).set("apiLoad", true);
    case Actions.SET_NEW_PASSWORD_SUCCESS:
      return state
        .set("setNewPasswordSuccess", action.payload)
        .set("apiLoad", false);

    //Main Flow
    case Actions.CREATE_EVENT:
      return state.set("createEvent", action.payload).set("apiLoad", true);
    case Actions.CREATE_EVENT_SUCCESS:
      return state
        .set("createEventSuccess", action.payload)
        .set("clearStateData", {})
        .set("apiLoad", false);
    case Actions.EXISTING_USER_LIST:
      // console.log("action.payload")
      return state.set("existingUserList", action.payload);
    case Actions.EXISTING_USER_LIST_SUCCESS:
      return state.set("existingUserListSuccess", action.payload);

    case Actions.SEND_INVITE:
      // console.log("sendInvite_Reducer", action.payload)
      return state.set("sendInvite", action.payload);
    case Actions.SEND_INVITE_SUCCESS:
      return state.set("sendInviteSuccess", action.payload);
    case Actions.GET_GAME_SUCCESS:
      return state.set("getGameSuccess", action.payload);
    case Actions.CREATE_GAME_BODY_SUCCESS:
      console.log("state", state.get("createGameBodySuccess"));
      return state.set("createGameBodySuccess", {
        ...state.get("createGameBodySuccess"),
        ...action.payload,
      });
    case Actions.CREATE_TEAM_SUCCESS:
      return state.set("createTeamSuccess", action.payload);
    case Actions.CREATE_TEAM:
      return state.set("createTeam", action.payload);
    case Actions.CREATE_GAME_SUCCESS:
      return state.set("createGameSuccess", action.payload);

    case Actions.TEAMS_DATA:
      return state.set("teamData", action.payload);

    default:
      return state;
  }
}
