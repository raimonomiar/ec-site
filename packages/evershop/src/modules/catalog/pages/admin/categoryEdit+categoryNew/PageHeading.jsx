import PropTypes from 'prop-types';
import React from 'react';
import PageHeading from '@components/admin/cms/PageHeading';
import { _ } from '@evershop/evershop/src/lib/locale/translate';

export default function CategoryEditPageHeading({ backUrl, category }) {
  return (
    <PageHeading
      backUrl={backUrl}
      heading={category ? _('Editing ${name}', { name: category.name }) : _('Create A New Category')}
    />
  );
}

CategoryEditPageHeading.propTypes = {
  backUrl: PropTypes.string.isRequired,
  category: PropTypes.shape({
    name: PropTypes.string
  })
};

CategoryEditPageHeading.defaultProps = {
  category: {}
};

export const layout = {
  areaId: 'content',
  sortOrder: 5
};

export const query = `
  query Query {
    category(id: getContextValue("categoryId", null)) {
      name
    }
    backUrl: url(routeId: "categoryGrid")
  }
`;
