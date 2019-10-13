/*
 *
 * Login actions
 *
 */
import { DEFAULT_ACTION,LOGIN_INPUT,LOGIN_SUBMIT,SET_USERS} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function onChangeLoginInput(inputObj) {
  return {
    type: LOGIN_INPUT,
    inputObj
  };
}

export function loginSubmit() {
  return {
    type: LOGIN_SUBMIT,
  };
}

export function setAuthUser(user) {
  return {
    type: SET_USERS,
    user ,
  };
}
