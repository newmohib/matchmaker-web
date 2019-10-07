/**
 *
 * Navbar
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { NavLink } from 'react-router-dom';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectNavbar from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function Navbar() {
  useInjectReducer({ key: 'navbar', reducer });
  useInjectSaga({ key: 'navbar', saga });

  return (
    <div className="shadow bg-white rounded">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <NavLink to="/" className="nav-link">
              Home <span className="sr-only" />
            </NavLink>
          </li>
        </ul>
        <div className="form-inline my-2 my-lg-0">
          {/* <NavLink to={`/signup`} className="btn btn-outline-success btn-sm mr-sm-2" >Signup</NavLink> */}
          <NavLink to="/login" className="btn btn-light btn-sm mr-sm-2">
            Login
          </NavLink>
          {/* <NavLink to={`/logout`}  className="btn btn-outline-success btn-sm my-2 my-sm-0" >Logout</NavLink> */}
        </div>
      </nav>
    </div>
  );
}

Navbar.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  navbar: makeSelectNavbar(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Navbar);
