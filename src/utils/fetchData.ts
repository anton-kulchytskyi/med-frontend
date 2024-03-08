const BASE_URL = 'https://med-backend-rapb.onrender.com';

export const fetchData = async (api: string) => {
  const response = await fetch(`${BASE_URL}/${api}`);
  const data = await response.json();
  return data;
};
