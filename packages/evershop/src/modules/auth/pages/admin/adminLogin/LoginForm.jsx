import PropTypes from 'prop-types';
import React from 'react';
import { Field } from '@components/common/form/Field';
import { Form } from '@components/common/form/Form';
import './LoginForm.scss';
import Button from '@components/common/form/Button';
import { _ } from '@evershop/evershop/src/lib/locale/translate';

export default function LoginForm({ authUrl, dashboardUrl }) {
  const [error, setError] = React.useState(null);

  const onSuccess = (response) => {
    if (!response.error) {
      window.location.href = dashboardUrl;
    } else {
      setError(response.error.message);
    }
  };

  return (
    <div className="admin-login-form">
      <div className="flex items-center justify-center mb-3">
        <img
          width={60}
          height={60}
          alt="EverShop Admin Panel"
          src="../logo_text.png"
        />
      </div>
      {error && <div className="text-critical py-1">{error}</div>}
      <Form
        action={authUrl}
        method="POST"
        id="adminLoginForm"
        isJSON
        onSuccess={onSuccess}
        submitBtn={false}
      >
        <Field
          name="email"
          type="email"
          label={_('Email')}
          placeholder={_('Email')}
          validationRules={['notEmpty', 'email']}
        />
        <Field
          name="password"
          type="password"
          label={_('Password')}
          placeholder={_('Password')}
          validationRules={['notEmpty']}
        />
        <div className="form-submit-button flex border-t border-divider mt-1 pt-1">
          <Button
            title={_('Login')}
            type="submit"
            onAction={() => {
              document
                .getElementById('adminLoginForm')
                .dispatchEvent(
                  new Event('submit', { cancelable: true, bubbles: true })
                );
            }}
          />
        </div>
      </Form>
    </div>
  );
}

LoginForm.propTypes = {
  authUrl: PropTypes.string.isRequired,
  dashboardUrl: PropTypes.string.isRequired
};

export const layout = {
  areaId: 'content',
  sortOrder: 10
};

export const query = `
  query Query {
    authUrl: url(routeId: "adminLoginJson")
    dashboardUrl: url(routeId: "dashboard")
  }
`;
