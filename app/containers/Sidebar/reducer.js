/*
 *
 * Sidebar reducer
 *
 */
import produce from 'immer';
import { DEFAULT_ACTION, SIDEBAR_OPEN } from './constants';

export const initialState = {
  sidebarOpen: false
};

/* eslint-disable default-case, no-param-reassign */
const sidebarReducer = (state = initialState, action) =>
produce(state, draft => {
  switch (action.type) {
    case SIDEBAR_OPEN:
      console.log('reducer', action.sidebarOpen);
      draft.sidebarOpen = action.sidebarOpen
      break
  }
});

export default sidebarReducer;
