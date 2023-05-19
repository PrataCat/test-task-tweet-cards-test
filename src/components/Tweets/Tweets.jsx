import TweetItem from 'components/TweetItem/TweetItem';
import { TweetList } from './Tweets.styled';

const Tweets = ({ tweets, pageTitle, userChange }) => {
  return (
    <>
      <h2>{pageTitle}</h2>
      <TweetList>
        {tweets.map(tweet => {
          const { id } = tweet;
          return <TweetItem key={id} user={tweet} userChange={userChange} />;
        })}
      </TweetList>
    </>
  );
};

export default Tweets;
