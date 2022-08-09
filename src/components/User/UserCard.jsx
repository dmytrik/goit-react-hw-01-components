import propTypes from 'prop-types';

const UserCard = ({ name, tag, location, url, stats }) => {
  const { followers, views, likes } = stats;
  return (
    <div className="profile">
      <div className="description">
        <img src={url} alt={name} className="avatar" />
        <p className="name">{name}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className="stats">
        <li>
          <span className="label">Followers</span>
          <span className="quantity">{followers}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="quantity">{views}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="quantity">{likes}</span>
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
