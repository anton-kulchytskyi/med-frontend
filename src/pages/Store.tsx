import { useState } from 'react';
import { Col, Row, Stack } from 'react-bootstrap';
import MedicinesList from '../components/MedicinesList';
import PharmaciesList from '../components/PharmaciesList';

const Store = () => {
  const [pharmacyId, setPharmacyId] = useState('');

  const handleId = (id: string) => setPharmacyId(id);
  // return <MedicinesList />;
  return (
    <Row>
      <Col sm={3}>
        <PharmaciesList handleId={handleId} />
      </Col>
      <Col sm={9}>
        <MedicinesList pharmacyId={pharmacyId} />;
      </Col>
    </Row>
  );
};

export default Store;
