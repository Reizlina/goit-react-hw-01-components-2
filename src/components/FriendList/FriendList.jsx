import PropTypes from 'prop-types';
import style from './FriendList.module.css';

import FriendListItem from './FriendListItem/FriendListItem';
import friends from '../../db/friends.json';

function FriendList() {
  return (
    <ul className={style.list}>
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          img={friend.avatar}
          name={friend.name}
          status={friend.isOnline}
        />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  key: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
};

export default FriendList;
