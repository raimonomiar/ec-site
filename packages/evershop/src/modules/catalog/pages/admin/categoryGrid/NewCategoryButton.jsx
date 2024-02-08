import PropTypes from 'prop-types';
import React from 'react';
import Button from '@components/common/form/Button';
import { _ } from '@evershop/evershop/src/lib/locale/translate';

export default function NewCategoryButton({ newCateoryUrl }) {
  return <Button url={newCateoryUrl} title={_("New Category")} />;
}

NewCategoryButton.propTypes = {
  newCateoryUrl: PropTypes.string.isRequired
};

export const layout = {
  areaId: 'pageHeadingRight',
  sortOrder: 10
};

export const query = `
  query Query {
    newCateoryUrl: url(routeId: "categoryNew")
  }
`;
