import { useState, useEffect } from 'react';
import { Medicine } from '../../interfaces/Medicine';
import Loading from './Loading';
import { Col, Row } from 'react-bootstrap';
import MedicineItem from './MedicineItem';

const MedicinesList = () => {
  const url = 'https://med-backend-rapb.onrender.com/medicines';
  const [medicines, setMedicines] = useState<Medicine[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchMedicines = async () => {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data, 'medList');
    setIsLoading(false);
    return setMedicines(data);
  };

  useEffect(() => {
    fetchMedicines();
  }, []);

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
          {medicines.map((medicine) => (
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
