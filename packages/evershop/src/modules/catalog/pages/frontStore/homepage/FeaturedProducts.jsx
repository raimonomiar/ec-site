import ProductList from '@components/frontStore/catalog/product/list/List';
import PropTypes from 'prop-types';
import React from 'react';
import { _ } from '@evershop/evershop/src/lib/locale/translate';

export default function FeaturedProducts({ collection }) {
  if (!collection) {
    return null;
  }
  return (
    <div className="pt-3">
      <div className="page-width">
        <h3 className="mt-3 mb-3 text-center uppercase h4 tracking-widest">
          {_('Featured Products')}
        </h3>
        <ProductList products={collection.products.items} countPerRow={4} />
      </div>
    </div>
  );
}

FeaturedProducts.propTypes = {
  collection: PropTypes.shape({
    collectionId: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    products: PropTypes.shape({
      items: PropTypes.arrayOf(
        PropTypes.shape({
          productId: PropTypes.number.isRequired,
          sku: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          price: PropTypes.shape({
            regular: PropTypes.shape({
              value: PropTypes.number.isRequired,
              text: PropTypes.string.isRequired
            }).isRequired,
            special: PropTypes.shape({
              value: PropTypes.number.isRequired,
              text: PropTypes.string.isRequired
            }).isRequired
          }).isRequired,
          image: PropTypes.shape({
            alt: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired
          }).isRequired,
          url: PropTypes.string.isRequired
        })
      ).isRequired
    }).isRequired
  }).isRequired
};

export const layout = {
  areaId: 'content',
  sortOrder: 15
};

export const query = `
  query query {
    collection (code: "homepage") {
      collectionId
      name
      products (filters: [{key: "limit", operation: "=", value: "4"}]) {
        items {
          productId
          name
          sku
          price {
            regular {
              value
              text
            }
            special {
              value
              text
            }
            }
          image {
            alt
            url: listing
          }
          url
        }
      }
    }
  }
`;
