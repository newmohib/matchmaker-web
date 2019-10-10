/*
 *
 * Login reducer
 *
 */
import produce from 'immer';
import { DEFAULT_ACTION,LOGIN_INPUT,LOGIN_SUBMIT } from './constants';

export const initialState = {
  loginInput:{}
};


/* eslint-disable default-case, no-param-reassign */
const loginReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
        case LOGIN_INPUT:
        draft.loginInput=action.inputObj
        break;
    }
  });

export default loginReducer;
