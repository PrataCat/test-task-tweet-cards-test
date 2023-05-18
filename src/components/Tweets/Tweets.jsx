import TweetItem from 'components/TweetItem/TweetItem';
import { TweetList } from './Tweets.styled';

const Tweets = ({ tweets, pageTitle }) => {
  return (
    <>
      <h2>{pageTitle}</h2>
      <TweetList>
        {tweets.map(tweet => {
          const { id, tweets, followers, avatar } = tweet;
          return (
            <TweetItem
              key={id}
              avatar={avatar}
              tweets={tweets}
              followers={followers}
            />
          );
        })}
      </TweetList>
    </>
  );
};

export default Tweets;
