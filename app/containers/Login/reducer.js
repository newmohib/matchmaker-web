/*
 *
 * Login reducer
 *
 */
import produce from 'immer';
import { DEFAULT_ACTION,LOGIN_INPUT,LOGIN_SUBMIT,SET_USERS } from './constants';

export const initialState = {
  loginInput:{},
  user:{}
};


/* eslint-disable default-case, no-param-reassign */
const loginReducer = (state = initialState, action) =>
produce(state, draft => {
    let newInfo=action.inputObj;
    let oldInfo=state.loginInput;
    let all={...oldInfo, ...newInfo};
    switch (action.type) {
        case LOGIN_INPUT:
        draft.loginInput=all
        break;
        case SET_USERS:
        draft.user=action.user
        break;
    }
  });

export default loginReducer;
