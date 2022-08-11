import propTypes from 'prop-types';
import {
  UserContainer,
  UserAvatar,
  UserName,
  UserInfo,
  UserDescription,
  UserStatsBox,
  UserStatsItem,
  UserStat,
  UserStatValue,
} from './UserCard.styled';

const UserCard = ({ name, tag, location, url, stats }) => {
  const { followers, views, likes } = stats;
  return (
    <UserContainer>
      <UserDescription>
        <UserAvatar src={url} alt={name} />
        <UserName>{name}</UserName>
        <UserInfo>@{tag}</UserInfo>
        <UserInfo>{location}</UserInfo>
      </UserDescription>

      <UserStatsBox>
        <UserStatsItem>
          <UserStat>Followers</UserStat>
          <UserStatValue>{followers}</UserStatValue>
        </UserStatsItem>
        <UserStatsItem>
          <UserStat>Views</UserStat>
          <UserStatValue>{views}</UserStatValue>
        </UserStatsItem>
        <UserStatsItem>
          <UserStat>Likes</UserStat>
          <UserStatValue>{likes}</UserStatValue>
        </UserStatsItem>
      </UserStatsBox>
    </UserContainer>
  );
};

UserCard.propTypes = {
  name: propTypes.string.isRequired,
  tag: propTypes.string.isRequired,
  location: propTypes.string.isRequired,
  url: propTypes.string.isRequired,
  stats: propTypes.objectOf(propTypes.number).isRequired,
};
export default UserCard;
