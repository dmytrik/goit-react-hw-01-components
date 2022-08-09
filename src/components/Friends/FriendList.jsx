import propTypes from 'prop-types';
import Friend from './Friend';
export default function Friends({ friends }) {
  return (
    <ul className="friend-list">
      {friends.map(({ avatar, name, isOnline, id }) => (
        <li className="item" key={id}>
          <Friend imageUrl={avatar} friendName={name} online={isOnline} />
        </li>
      ))}
    </ul>
  );
}
Friends.propTypes = {
  friends: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
    })
  ),
};
