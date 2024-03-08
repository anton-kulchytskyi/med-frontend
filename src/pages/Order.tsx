import { Col, Row } from 'react-bootstrap';
import Form from '../components/Form';
import ShoppingCartList from '../components/ShoppingCartList';

const Order = () => {
  return (
    <>
      <h1 className="mb-4">Complite your order</h1>
      <Row>
        <Col
          xs={12}
          md={6}
        >
          <Form />
        </Col>
        <Col
          xs={12}
          md={6}
        >
          <ShoppingCartList />
        </Col>
      </Row>
    </>
  );
};

export default Order;
