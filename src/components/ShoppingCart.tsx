import { Offcanvas, Stack } from 'react-bootstrap';
import { useQuery } from 'react-query';
import { useShoppingCart } from '../context/ShoppingCardContext';
import { formatCurrency } from '../utils/formatCurrency';
import { Medicine } from '../../interfaces/Medicine';

import { CartItem } from './CartItem';
// import storeItems from '../data/items.json';
const fetchData = async (): Promise<Medicine[]> => {
  const response = await fetch(
    'https://med-backend-rapb.onrender.com/medicines'
  );
  const data = await response.json();
  // console.log(data, 'ShoppingCart');
  return data;
};

type ShoppingCartProps = {
  isOpen: boolean;
};

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { closeCart, cartItems } = useShoppingCart();
  const { data } = useQuery<Medicine[]>('medicines', fetchData);
  // console.log(data, 'ShoppingCart');

  const visibleItems = data?.filter((med) => {
    return cartItems.some((item) => item.id === med._id);
    // if (cartItems.some((item) => item.id === med._id)) {
    //   return {
    //     ...med,
    //     quantity:
    //       cartItems.find((item) => item.id === med._id)?.quantity || null,
    //   };
    // }
  });

  console.log(visibleItems, 'vI');
  return (
    <Offcanvas
      show={isOpen}
      onHide={closeCart}
      placement="end"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {visibleItems?.map((item) => (
            <CartItem
              key={item._id}
              {...item}
            />
          ))}
          <div className="ms-auto fw-bold fs-5">
            Total{' '}
            {formatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = visibleItems?.find((i) => i._id === cartItem.id);
                return total + (item?.price || 0) * cartItem.quantity;
              }, 0)
            )}
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
}
