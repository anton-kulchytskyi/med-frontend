import { Button, Stack } from 'react-bootstrap';
import { useShoppingCart } from '../context/ShoppingCardContext';
import { formatCurrency } from '../utils/formatCurrency';
import { Medicine } from '../../interfaces/Medicine';

export function CartItem({ _id, name, price }: Medicine) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(_id);

  return (
    <Stack
      direction="horizontal"
      gap={2}
      className="d-flex align-items-center"
    >
      <div className="p-2">
        {name} x {quantity}
      </div>
      <div className="p-2  ms-auto">{formatCurrency(price)}</div>
      <Button
        variant="outline-primary"
        size="sm"
        onClick={() => increaseCartQuantity(_id)}
      >
        +
      </Button>
      <Button
        variant="outline-primary"
        size="sm"
        onClick={() => decreaseCartQuantity(_id)}
      >
        -
      </Button>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeFromCart(_id)}
      >
        &times;
      </Button>
    </Stack>
  );
}
