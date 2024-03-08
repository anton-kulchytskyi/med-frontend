import { Dropdown } from 'react-bootstrap';
import { useQuery } from 'react-query';
import { fetchData } from '../utils/fetchData';
import { User } from '../../interfaces/User';
import { useState } from 'react';

const getAllusers = async (): Promise<User[]> => await fetchData('users');

type UsersDropdownProps = {
  setSelectedUserId: (id: string) => void;
};

const UsersDropdown = ({ setSelectedUserId }: UsersDropdownProps) => {
  const [selectedItem, setSelectedItem] = useState<string>('Choose user');
  const { data } = useQuery<User[]>('medicines', getAllusers);

  const handleSelect = (user: User) => {
    // Оновлення стану для вибраного елемента та title дропдауна
    setSelectedUserId(user._id);
    setSelectedItem(user.name);
  };

  return (
    <Dropdown>
      <Dropdown.Toggle
        variant="success"
        id="dropdown-basic"
      >
        {selectedItem}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {data?.map((item) => (
          <Dropdown.Item
            key={item._id}
            onClick={() => handleSelect(item)}
          >
            {item.name}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default UsersDropdown;
