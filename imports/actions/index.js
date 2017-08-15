/**
 * @author Aldrin Lim
 * Set Redux State
 * @param {array} args 
 */

export const setUserData = (args) => {
  return {
    type: "SET_USER",
    payload: args
  };
};

export const unsetUserData = (args) => {
  return {
    type: "UNSET_USER"
  };
};