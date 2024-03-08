import { Stack } from 'react-bootstrap';
import { useQuery } from 'react-query';
import { useShoppingCart } from '../context/ShoppingCardContext';
import { formatCurrency } from '../utils/formatCurrency';
import { Medicine } from '../../interfaces/Medicine';
import { CartItem } from './CartItem';

import { fetchData } from '../utils/fetchData';

const getAllMedicines = async (): Promise<Medicine[]> =>
  await fetchData('medicines');

const ShoppingCartList = () => {
  const { closeCart, cartItems } = useShoppingCart();
  const { data } = useQuery<Medicine[]>('medicines', getAllMedicines);

  const visibleItems = data?.filter((med) => {
    return cartItems.some((item) => item.id === med._id);
  });

  return (
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
  );
};

export default ShoppingCartList;
