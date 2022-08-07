import propTypes from 'prop-types';

const UserCard = ({ name, tag, location, url, stats }) => {
  const { followers, views, likes } = stats;
  return (
    <div class="profile">
      <div class="description">
        <img src={url} alt={name} class="avatar" />
        <p class="name">{name}</p>
        <p class="tag">@{tag}</p>
        <p class="location">{location}</p>
      </div>

      <ul class="stats">
        <li>
          <span class="label">Followers</span>
          <span class="quantity">{followers}</span>
        </li>
        <li>
          <span class="label">Views</span>
          <span class="quantity">{views}</span>
        </li>
        <li>
          <span class="label">Likes</span>
          <span class="quantity">{likes}</span>
        </li>
      </ul>
    </div>
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
