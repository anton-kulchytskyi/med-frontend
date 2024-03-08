import { Button, Card } from 'react-bootstrap';
import { Medicine } from '../../interfaces/Medicine';
import { formatCurrency } from '../utils/formatCurrency';
import { useShoppingCart } from '../context/ShoppingCardContext';

const MedicineItem = ({ _id, name, price }: Medicine) => {
  const { getItemQuantity, increaseCartQuantity, removeFromCart } =
    useShoppingCart();
  const quantity = getItemQuantity(_id);
  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={`https://fakeimg.pl/350x200/?text=${name}`}
      />
      <Card.Body>
        <Card.Title>{formatCurrency(price)}</Card.Title>
        {quantity === 0 ? (
          <Button onClick={() => increaseCartQuantity(_id)}>
            + Add To Cart
          </Button>
        ) : (
          <Button
            onClick={() => removeFromCart(_id)}
            variant="danger"
            size="sm"
          >
            Remove
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default MedicineItem;
