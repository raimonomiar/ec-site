import PropTypes from 'prop-types';
import React from 'react';
import PageHeading from '@components/admin/cms/PageHeading';
import { _ } from '@evershop/evershop/src/lib/locale/translate';

export default function CollectionEditPageHeading({ backUrl, collection }) {
  return (
    <div className='w-2/3' style={{margin: '0 auto'}}>
      <PageHeading
        backUrl={backUrl}
        heading={collection ? _('Editing ${name}', { name: collection.name }) : _('Create A New Collection')}
      />
    </div>
  );
}

CollectionEditPageHeading.propTypes = {
  backUrl: PropTypes.string.isRequired,
  collection: PropTypes.shape({
    name: PropTypes.string
  })
};

CollectionEditPageHeading.defaultProps = {
  collection: {}
};

export const layout = {
  areaId: 'content',
  sortOrder: 5
};

export const query = `
  query Query {
    collection(code: getContextValue("collectionCode", null)) {
      name
    }
    backUrl: url(routeId: "collectionGrid")
  }
`;
