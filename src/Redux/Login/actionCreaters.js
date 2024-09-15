import { USERID, PASSWORD } from "./actions";

export const updateUserId = (user) => {
  return {
    type: USERID,
    payload: user,
  };
};
export const updatePassword = (password) => {
  return {
    type: PASSWORD,
    payload: password,
  };
};
