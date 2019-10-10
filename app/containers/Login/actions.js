/*
 *
 * Login actions
 *
 */
import { DEFAULT_ACTION,LOGIN_INPUT,LOGIN_SUBMIT} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function onChangeLoginInput(inputObj) {
  // console.log('Login actions success',inputObj);
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
