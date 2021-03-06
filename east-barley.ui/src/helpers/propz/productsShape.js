import PropTypes from 'prop-types';

const productsShape = PropTypes.shape({
  productId: PropTypes.number,
  productTypesTableId: PropTypes.number,
  category: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
});

export default { productsShape };
