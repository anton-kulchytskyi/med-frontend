import { Button, Card } from 'react-bootstrap';
import { Medicine } from '../../interfaces/Medicine';
import { formatCurrency } from '../utils/formatCurrency';
import { useShoppingCart } from '../context/ShoppingCardContext';

const MedicineItem = ({ _id, name, price, likes }: Medicine) => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(_id);
  // const quantity = 0;
  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={`https://fakeimg.pl/350x200/?text=${name}`}
      />
      <Card.Body className="d-flex flex-colunm">
        <Card.Title className="d-flex justify-content-center align-items-baseline mb-4">
          <p className="fs-2">{formatCurrency(price)}</p>
          <span className="ms-2 text-muted">{likes}</span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button
              className="w-100"
              onClick={() => increaseCartQuantity(_id)}
            >
              + Add To Cart
            </Button>
          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: '.5rem' }}
            >
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ gap: '.5rem' }}
              >
                <Button onClick={() => decreaseCartQuantity(_id)}>-</Button>
                <div>
                  <span className="fs-3">{quantity}</span> in cart
                </div>
                <Button onClick={() => increaseCartQuantity(_id)}>+</Button>
              </div>
              <Button
                onClick={() => removeFromCart(_id)}
                variant="danger"
                size="sm"
              >
                Remove
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default MedicineItem;
