/**
 *
 * Login
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectLogin from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { LoginForm } from './loginForm';

export function Login() {
  useInjectReducer({ key: 'login', reducer });
  useInjectSaga({ key: 'login', saga });
  const validateProperty = input => {
    const { name, value } = input;
    // const obj = { [name]: value };
    let errors = null;
    if (value == '') {
      errors = 'Required';
    }
    return errors;
  };

  const handleChange = event => {
    // console.log("namew", event.target.value, event.target.name);
    const { name, value } = event.target;
    const errors = {};
    // const errors = { ...this.state.errors };
    const loginInputObj = { ...props.loginInput };
    console.log('index after update', loginInputObj);

    const errorMessage = validateProperty(event.target);
    if (errorMessage) {
      errors[name] = 'Required';
    } else {
      delete errors[name];
    }

    loginInputObj[name] = value;

    props.onChangeLogin(loginInputObj);
    //  this.setState({ createPassword: createPassword, errors: errors });
  };

  const handleSubmit = event => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formObject = {};
    for (const entry of formData.entries()) {
      const name = [entry[0]];
      const value = entry[1];
      formObject[name] = value;
    }
    // console.log(formObject);

    const loginInputObj = { ...props.loginInput };

    props.loginSubmitToAction();

    // console.log(loginInputObj);
  };

  return (
    <div>
      <Helmet>
        <title>Log in</title>
        <meta name="description" content="Description of Login" />
      </Helmet>
      <div
        className="container form-wrapper"
        style={{ height: 'calc(100vh - 65px)' }}
      >
        <div className="row justify-content-center h-100">
          <div className="col-10 col-lg-4 col-md-8 col-sm-10 h-100 d-flex align-items-center">
            <div className="form-container formStyle">
              <h3 className="text-center headerStyle">Log in</h3>
              <div className="container">
                <hr />
                <LoginForm
                  handleSubmit={handleSubmit}
                  handleChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  login: makeSelectLogin(),
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
)(Login);
