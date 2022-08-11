import propTypes from 'prop-types';

import { IconActive } from './Friend.styled';
export default function Friend({ imageUrl, friendName, online }) {
  return (
    <>
      <IconActive online={online}></IconActive>
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
