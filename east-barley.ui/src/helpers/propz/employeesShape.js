import PropTypes from 'prop-types';

const employeeShape = PropTypes.shape({
  salesRepId: PropTypes.number,
  userId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  hireDate: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
});

export default { employeeShape };
