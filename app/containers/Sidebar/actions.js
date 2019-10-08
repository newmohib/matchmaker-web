/*
 *
 * Sidebar actions
 *
 */

import { DEFAULT_ACTION,SIDEBAR_OPEN } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}


export function sidebarOpenToAction(sidebarOpen) {
   console.log('Events actions success',sidebarOpen);
  return {
    type: SIDEBAR_OPEN,
    sidebarOpen,
  };
}