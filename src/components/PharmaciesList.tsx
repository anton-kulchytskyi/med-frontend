import { useQuery } from 'react-query';
import { Pharmace } from '../../interfaces/Pharmace';
import { Button, Stack } from 'react-bootstrap';
import PharmaceItem from './PharmaceItem';
import { fetchData } from '../utils/fetchData';

const getAllPharmacies = async (): Promise<Pharmace[]> =>
  await fetchData('pharmacies');

type PharmaciesListProps = {
  handleId: (id: string) => void;
};

const PharmaciesList = ({ handleId }: PharmaciesListProps) => {
  const { data } = useQuery<Pharmace[]>('pharmacies', getAllPharmacies);

  return (
    <Stack gap={2}>
      {data?.map((pharma) => (
        <PharmaceItem
          key={pharma._id}
          handleId={handleId}
          pharma={pharma}
        />
      ))}
      <Button
        className="w-100"
        variant="outline-secondary"
        onClick={() => handleId('')}
      >
        Show all Medicinies
      </Button>
    </Stack>
  );
};

export default PharmaciesList;
