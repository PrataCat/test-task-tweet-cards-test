import axios from 'axios';

axios.defaults.baseURL = 'https://645e8b678d08100293023073.mockapi.io/data';

export const PutUsers = async (id, user) => {
  const response = await axios.put(`/users/${id}`, user);

  return response.data;
};

export default PutUsers;
