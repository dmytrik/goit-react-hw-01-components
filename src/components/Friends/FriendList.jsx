import propTypes from 'prop-types';
import Friend from './Friend';
import s from './FriendList.module.css';
export default function Friends({ friends }) {
  return (
    <div className={s.container}>
      <ul className={s.friendList}>
        {friends.map(({ avatar, name, isOnline, id }) => (
          <li className={s.item} key={id}>
            <Friend imageUrl={avatar} friendName={name} online={isOnline} />
          </li>
        ))}
      </ul>
    </div>
  );
}
Friends.propTypes = {
  friends: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
    })
  ),
};
