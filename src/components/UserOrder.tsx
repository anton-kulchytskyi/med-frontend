import { useQuery } from 'react-query';
import { fetchData } from '../utils/fetchData';
import { Order } from '../../interfaces/Order';
import { ListGroup } from 'react-bootstrap';

const getAllOrders = async (): Promise<Order[]> => await fetchData('orders');

type UserOrderProps = {
  selectedUserId: string;
};

const UserOrder = ({ selectedUserId }: UserOrderProps) => {
  const { data, isLoading } = useQuery<Order[]>('orders', getAllOrders);

  const userOrders = data?.filter((order) => order.userId === selectedUserId);
  return (
    <>
      <h1>{selectedUserId} user`s orders</h1>
      <ListGroup>
        {userOrders?.map((order) => (
          <ListGroup key={order._id}>
            {order.items.map((item) => (
              <ListGroup.Item key={item._id}>{item.id}</ListGroup.Item>
            ))}
          </ListGroup>
        ))}
      </ListGroup>
    </>
  );
};

export default UserOrder;
