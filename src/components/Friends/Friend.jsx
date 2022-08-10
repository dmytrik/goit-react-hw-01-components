import propTypes from 'prop-types';
import s from './FriendList.module.css';
export default function Friend({ imageUrl, friendName, online }) {
  return (
    <>
      <span
        className={online ? `${s.status} ${s.online}` : `${s.status}`}
      ></span>
      <img className="avatar" src={imageUrl} alt={friendName} width="48" />
      <p className="name">{friendName}</p>
    </>
  );
}

Friend.propTypes = {
  imageUrl: propTypes.string.isRequired,
  friendName: propTypes.string.isRequired,
  online: propTypes.bool.isRequired,
};
