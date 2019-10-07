/*
 * Navbar Messages
 *
 * This contains all the text for the Navbar container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.Navbar';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the Navbar container!',
  },
});
