import {
  Tweet,
  Logo,
  Marks,
  Line,
  Avatar,
  Сircle,
  Stat,
  Info,
  Count,
  Btn,
} from './TweetItem.styled';
import logo from '../../images/logo.png';
import marks from '../../images/marks.png';
import ellipse from '../../images/ellipse.png';
import { useEffect, useState } from 'react';

const TweetItem = ({ user, userChange }) => {
  const [currentUser, setCurrentUser] = useState(user);
  const [startStatus, setStartStatus] = useState('FirstRender');

  const { id, avatar, tweets, followers, color, status } = currentUser;

  useEffect(() => {
    if (startStatus === 'FirstRender') {
      return;
    }
    userChange(currentUser);
  }, [currentUser, startStatus, userChange]);

  const increment = () => {
    setCurrentUser(prevState => ({
      ...prevState,
      followers: prevState.followers + 1,
      status: 'following',
      color: '#5cd3a8',
    }));
    if (startStatus !== 'NextRender') {
      setStartStatus('NextRender');
    }
  };

  const decrement = () => {
    setCurrentUser(prevState => ({
      ...prevState,
      followers: prevState.followers - 1,
      status: 'follow',
      color: '',
    }));
    if (startStatus !== 'NextRender') {
      setStartStatus('NextRender');
    }
  };

  const hendleClick = e => {
    const value = e.currentTarget.textContent.toLowerCase();

    if (value === 'follow') {
      increment();
    } else {
      decrement();
    }
  };

  return (
    <Tweet key={id}>
      <Logo src={logo} alt="logo" />
      <Marks src={marks} alt="dialog icon" />
      <Line></Line>
      <Avatar src={avatar} alt="avatar" />
      <Сircle src={ellipse} alt="avatar" />
      <Stat>
        <Info>
          <Count>{tweets}</Count> tweets
        </Info>
        <Info>
          <Count>{followers}</Count> followers
        </Info>
      </Stat>
      <Btn onClick={hendleClick} background={color}>
        {status}
      </Btn>
    </Tweet>
  );
};

export default TweetItem;
