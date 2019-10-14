/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';

import messages from './messages';

export default function NotFound() {
  return (
    <div
    className="container form-wrapper"
    style={{ height: 'calc(100vh - 65px)' }}
  >
    <div className="row justify-content-center h-100">
      <div className="col-12 col-lg-6 col-md-12 col-sm-12 h-100 d-flex align-items-center">
        <div className="form-container formStyle">
          <div className="container">
          <h1>
            <FormattedMessage {...messages.header} />
          </h1>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}
