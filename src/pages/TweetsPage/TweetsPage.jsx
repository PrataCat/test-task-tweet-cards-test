import Loader from 'components/Loader/Loader';
import Tweets from 'components/Tweets/Tweets';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import GetUsers from 'servises/Api/GetUsers';
import { Container } from './TweetsPage.styled';
import PutUsers from 'servises/Api/PutUsers';

const TweetsPage = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMassege, setErrorMassege] = useState(null);

  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    fetchUsers();
    setIsLoading(false);
  }, []);

  const fetchUsers = async () => {
    try {
      const data = await GetUsers();

      if (!data.length) {
        setErrorMassege('There are no tweets.');
        setIsLoading(false);
        return;
      } else {
        setUsers(data);
      }
    } catch (error) {
      setErrorMassege('Tweets loading error.');
    }
  };

  const PutUser = async (id, user) => {
    try {
      const data = await PutUsers(id, user);
      return data;
    } catch (error) {
      setErrorMassege('Tweets updating error.');
    }
  };

  const userChange = cangedUser => {
    const { id } = cangedUser;
    PutUser(id, cangedUser);
  };

  return (
    <Container>
      <Tweets
        tweets={users}
        pageTitle={'Recommended tweets'}
        userChange={userChange}
        location={location}
      />
      <button>Losd more</button>
      {isLoading && <Loader />}
      {errorMassege && <h2>{errorMassege}</h2>}
    </Container>
  );
};

export default TweetsPage;
