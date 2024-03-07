import { useState, useEffect } from 'react';
import { Pharmace } from '../../interfaces/Pharmace';

const Pharmacies = () => {
  const url = 'https://med-backend-rapb.onrender.com/pharmacies';
  const [pharmacies, setPharmacies] = useState<Pharmace[]>([]);

  const fetchPharmacies = async () => {
    const res = await fetch(url);
    const data = await res.json();
    return setPharmacies(data);
  };

  useEffect(() => {
    fetchPharmacies();
  }, []);

  return (
    <ul>
      {pharmacies.map((pharma) => (
        <li>{pharma.name}</li>
      ))}
    </ul>
  );
};

export default Pharmacies;
