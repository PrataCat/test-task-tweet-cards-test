import axios from 'axios';

axios.defaults.baseURL = 'https://645e8b678d08100293023073.mockapi.io/data';

export const GetUsers = async () => {
  const response = await axios.get('/users');

  return response.data;
};

export default GetUsers;
