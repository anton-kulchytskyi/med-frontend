import { Col, Row } from 'react-bootstrap';
import UsersDropdown from '../components/UsersDropdown';
import UserOrder from '../components/UserOrder';
import { useState } from 'react';

const OrderList = () => {
  const [selectedUserId, setSelectedUserId] = useState<string>('');
  return (
    <>
      <h1 className="mb-4">Check your order</h1>
      <Row>
        <Col
          xs={12}
          md={4}
        >
          <UsersDropdown setSelectedUserId={setSelectedUserId} />
        </Col>
        <Col
          xs={12}
          md={8}
        >
          <UserOrder selectedUserId={selectedUserId} />
        </Col>
      </Row>
    </>
  );
};

export default OrderList;
