import PropTypes from 'prop-types';
import React from 'react';
import { Card } from '@components/admin/cms/Card';
import { _ } from '@evershop/evershop/src/lib/locale/translate';

export default function OrderHistory({ customer: { orders = [] } }) {
  return (
    <Card title={_("Order History")}>
      {orders.length < 1 && (
        <Card.Session>
          <div>{_('Customer does not have any order yet.')}</div>
        </Card.Session>
      )}
      {orders.length > 0 && (
        <>
          {orders.map((order) => (
            <Card.Session>
              <div className="flex justify-between items-center gap-1">
                <div>
                  <a
                    className="font-semibold text-interactive"
                    href={order.editUrl}
                  >
                    #{order.orderNumber}
                  </a>
                </div>
                <div>
                  <span>{order.createdAt.text}</span>
                </div>
                <div>
                  <span>{order.paymentStatus.name}</span>
                </div>
                <div>
                  <span>{order.shipmentStatus.name}</span>
                </div>
                <div>
                  <span>{order.grandTotal.text}</span>
                </div>
              </div>
            </Card.Session>
          ))}
        </>
      )}
    </Card>
  );
}

OrderHistory.propTypes = {
  customer: PropTypes.shape({
    orders: PropTypes.arrayOf(
      PropTypes.shape({
        orderNumber: PropTypes.string
      })
    )
  }).isRequired
};

export const layout = {
  areaId: 'leftSide',
  sortOrder: 10
};

export const query = `
  query Query {
    customer(id: getContextValue("customerUuid", null)) {
      orders {
        orderNumber
        editUrl
        createdAt {
          text
        }
        shipmentStatus {
          name
        }
        paymentStatus {
          name
        }
        grandTotal {
          text
        }
      }
    }
  }
`;
