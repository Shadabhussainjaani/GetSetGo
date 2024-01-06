import queryString from "query-string";
import request from "../../utils/fetch";

export const signUp_Api = async (data) => {
  var data = await request.post(`/user/signup-phone`, data?.payload);
  return data;
};

export const ResendSignUpApi = async (data) => {
  var data = await request.post(`/user/reset-otp`, data?.payload);
  return data;
};

export const signUp_VerifyOtp_Api = async (data) => {
  var data = await request.post(
    `/user/signup-verifyotp`,
    data?.payload,
    data?.data?.data?.token
  );
  return data;
};

export const signUp_UserDetailsInfo_Api = async (data) => {
  var data = await request.post(`/user/signup-info`, data?.payload);
  return data;
};

export const selectAvatar_Api = async (data) => {
  var data = await request.get(`/user/getavatar`);
  return data;
};

export const signIn_Api = async (data) => {
  var data = await request.post(`/user/login`, data?.payload);
  return data;
};

export const forgotPassword_Api = async (data) => {
  var data = await request.post(`/user/forgot-password`, data?.payload);
  return data;
};

export const forgotPasswordVerifyOtp_Api = async (data) => {
  var data = await request.post(
    `/user/verify-forgot-password`,
    data?.payload,
    data?.data?.data?.token
  );
  // console.log("....Forgot_token", data.data.data.token)
  return data;
};
export const setNewPassword_Api = async (data) => {
  var data = await request.post(`/user/change-password`, data?.payload);
  return data;
};

// Main Flow
export const createEvent_Api = async (data) => {
  // console.log("createEvent_Api", data)
  var data = await request.post(
    `/event/create`,
    data?.payload,
    data?.payload?.token
  );
  // console.log("data==>", data)
  return data;
};

export const existingUserList_Api = async ({ text }) => {
  var data = await request.get(
    `/user/list?isArray=true&filter=${text?.text}&allUser=false`
  );
  return data;
};

export const sendInvite_Api = async (data) => {
  var data = await request.post(
    `/event/send-invite`,
    data?.payload,
    data?.payload?.token
  );

  return data;
};
export const getGame_Api = async (data) => {
  // console.log("getGame_Api", data)
  var data = await request.get(
    `/game/list-metagame`,
    data?.payload,
    data?.payload?.token
  );
  // console.log("🚀 ~ file: service.js:90 ~ constsendInvite_Api= ~ data:", data)
  return data;
};
export const createGame_Api = async (data) => {
  var responce = await request.post(`/game/create`, data?.payload);
  console.log(
    "🚀 ~ file: service.js:94 ~ constcreateGame_Api= ~ data:",
    responce
  );
  return responce;
};
export const createTeam_Api = async (data) => {
  var data = await request.post(
    "/game/create-team",
    data?.payload,
    data?.payload?.token
  );
  console.log("🚀 ~ file: service.js:100 ~ constcreateTeam_Api= ~ data:", data);
  return data;
};
