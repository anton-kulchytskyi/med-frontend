import { Button } from 'react-bootstrap';
import { Pharmace } from '../../interfaces/Pharmace';

type PharmaceItemprops = {
  pharma: Pharmace;
  handleId: (id: string) => void;
};

const PharmaceItem = ({ pharma, handleId }: PharmaceItemprops) => {
  return (
    <Button
      className="w-100"
      variant="outline-secondary"
      onClick={() => handleId(pharma._id)}
    >
      {pharma.name}
    </Button>
  );
};

export default PharmaceItem;
