import Loader from 'components/Loader/Loader';
import Tweets from 'components/Tweets/Tweets';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import GetUsers from 'servises/Api/GetUsers';
import { Container } from './TweetsPage.styled';

const TweetsPage = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMassege, setErrorMassege] = useState(null);

  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);

    (async () => {
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
    })();

    setIsLoading(false);
  }, []);

  return (
    <Container>
      <h1>Recommended tweets</h1>
      <Tweets tweets={users} pageTitle={'Tweets'} location={location} />
      {isLoading && <Loader />}
      {errorMassege && <h2>{errorMassege}</h2>}
    </Container>
  );
};

export default TweetsPage;
