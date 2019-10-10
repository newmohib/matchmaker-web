import { createSelector } from 'reselect';
import { initialState } from './reducer';



const selectLoginDomain = state => state.login || initialState;

const makeSelectLogin = () =>
  createSelector(
    selectLoginDomain,
    substate => substate,
  );

  const makeSelectLoginInput = () =>
  createSelector(
    selectLoginDomain,
    substate => { 
        return substate.loginInput},
  );

export default makeSelectLogin;
export { selectLoginDomain ,makeSelectLoginInput };
