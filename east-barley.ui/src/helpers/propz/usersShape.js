import PropTypes from 'prop-types';

const userShape = PropTypes.shape({
  userId: PropTypes.number,
  lastName: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  dateOfBirth: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  dateAccountCreated: PropTypes.string.isRequired,
  isOver21: PropTypes.bool.isRequired,
  isAcctActive: PropTypes.bool.isRequired,
  firebaseUID: PropTypes.string.isRequired,
});

export default { userShape };
