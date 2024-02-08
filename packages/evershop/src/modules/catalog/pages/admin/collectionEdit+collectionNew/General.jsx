import PropTypes from 'prop-types';
import React from 'react';
import Area from '@components/common/Area';
import { get } from '@evershop/evershop/src/lib/util/get';
import { Field } from '@components/common/form/Field';
import { Card } from '@components/admin/cms/Card';
import CkeditorField from '@components/common/form/fields/Ckeditor';
import { _ } from '@evershop/evershop/src/lib/locale/translate';

export default function General({
  collection,
  browserApi,
  deleteApi,
  uploadApi,
  folderCreateApi
}) {
  const fields = [
    {
      component: { default: Field },
      props: {
        id: 'name',
        name: 'name',
        label: _('Collection Name'),
        validationRules: ['notEmpty'],
        placeholder: _('Collection Name'),
        type: 'text'
      },
      sortOrder: 10,
      id: 'name'
    },
    {
      component: { default: Field },
      props: {
        id: 'code',
        name: 'code',
        label: _('Unique ID'),
        validationRules: ['notEmpty'],
        placeholder: _('Unique ID'),
        type: 'text'
      },
      sortOrder: 15,
      id: 'code'
    },
    {
      component: { default: Field },
      props: {
        id: 'collectionId',
        name: 'collection_id',
        type: 'hidden'
      },
      sortOrder: 10
    },
    {
      component: { default: CkeditorField },
      props: {
        id: 'description',
        name: 'description',
        label: _('Collection Description'),
        browserApi,
        deleteApi,
        uploadApi,
        folderCreateApi
      },
      sortOrder: 30
    }
  ].map((f) => {
    if (get(collection, `${f.props.id}`) !== undefined) {
      // eslint-disable-next-line no-param-reassign
      f.props.value = get(collection, `${f.props.id}`);
    }
    return f;
  });

  return (
    <Card title={_("General")}>
      <Card.Session>
        <Area id="collectionEditGeneral" coreComponents={fields} />
      </Card.Session>
    </Card>
  );
}

General.propTypes = {
  browserApi: PropTypes.string.isRequired,
  deleteApi: PropTypes.string.isRequired,
  folderCreateApi: PropTypes.string.isRequired,
  uploadApi: PropTypes.string.isRequired,
  collection: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    collectionId: PropTypes.number
  })
};

General.defaultProps = {
  collection: {}
};

export const layout = {
  areaId: 'collectionFormInner',
  sortOrder: 10
};

export const query = `
  query Query {
    collection(code: getContextValue("collectionCode", null)) {
      collectionId
      name
      code
      description
    }
    browserApi: url(routeId: "fileBrowser", params: [{key: "0", value: ""}])
    deleteApi: url(routeId: "fileDelete", params: [{key: "0", value: ""}])
    uploadApi: url(routeId: "imageUpload", params: [{key: "0", value: ""}])
    folderCreateApi: url(routeId: "folderCreate")
  }
`;
