import PropTypes from 'prop-types';

const booksShape = PropTypes.shape({
  productId: PropTypes.number,
  productTypesTableId: PropTypes.number,
  category: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  bookDetailsId: PropTypes.number,
  author: PropTypes.string.isRequired,
  isbn: PropTypes.string.isRequired,
  publisher: PropTypes.string.isRequired,
  pageCount: PropTypes.number.isRequired,
});

export default { booksShape };
