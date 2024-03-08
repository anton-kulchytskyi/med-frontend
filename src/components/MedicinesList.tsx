import { Medicine } from '../../interfaces/Medicine';
import { useQuery } from 'react-query';
import Loading from './Loading';
import { Col, Row } from 'react-bootstrap';
import MedicineItem from './MedicineItem';
import { fetchData } from '../utils/fetchData';

const getAllMedicines = async (): Promise<Medicine[]> =>
  await fetchData('medicines');

type MedicinesListProps = {
  pharmacyId: string;
};

const MedicinesList = ({ pharmacyId }: MedicinesListProps) => {
  const { data, isLoading } = useQuery<Medicine[]>(
    'medicines',
    getAllMedicines
  );

  let visibleItems = data;

  if (pharmacyId) {
    visibleItems = visibleItems?.filter(
      (item) => item.pharmacyId === pharmacyId
    );
  }

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Row
          lg={3}
          md={2}
          xs={1}
          className="g-3"
        >
          {visibleItems?.map((medicine) => (
            <Col key={medicine._id}>
              <MedicineItem {...medicine} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default MedicinesList;
