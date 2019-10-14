/**
 *
 * Login
 *
 */

import React, { memo ,useEffect,useState} from 'react';
import { NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectLogin,{makeSelectUser} from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { LoginForm } from './loginForm';
import { onChangeLoginInput,loginSubmit } from './actions';

export function Login(props) {
  useInjectReducer({ key: 'login', reducer });
  useInjectSaga({ key: 'login', saga });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    console.log("getUser",props.getUser);
  }, [props.getUser]);

  const validateProperty = input => {
    const { name, value } = input;
    let errors = false;
    if (value == '') {
      errors = true;
    }
    return errors;
  };

  const handleChange = event => {
    const { name, value } = event.target;
    const errors = {};
    const errorMessage = validateProperty(event.target);
    if (errorMessage) {
      errors[name] = 'Required';
    } else {
      delete errors[name];
    }
    setErrors(errors);
   let loginInfo={[name]: value}
    props.onChangeLogin(loginInfo);
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
    props.loginSubmitToAction();
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
              <h3 className="text-center headerStyle">Sign in</h3>
              <div className="container">
                <hr />
                <LoginForm
                  handleSubmit={handleSubmit}
                  handleChange={handleChange}
                  errors={errors}
                />
                <div className="text-right mt-2">
                <NavLink to={`/signup`} className="" >Create a New Account</NavLink>
                </div>
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
  getUser: makeSelectUser(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onChangeLogin: value => dispatch(onChangeLoginInput(value)),
    loginSubmitToAction: () => dispatch(loginSubmit()),
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
