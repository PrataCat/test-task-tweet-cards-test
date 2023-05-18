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
} from './TweetItem.styled';
import logo from '../../images/logo.png';
import marks from '../../images/marks.png';
import ellipse from '../../images/ellipse.png';

const TweetItem = ({ avatar, tweets, followers }) => {
  return (
    <Tweet>
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
    </Tweet>
  );
};

export default TweetItem;
