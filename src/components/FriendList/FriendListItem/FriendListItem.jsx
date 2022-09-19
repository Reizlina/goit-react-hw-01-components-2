import PropTypes from 'prop-types';
import clsx from 'clsx';
import style from './FriendListItem.module.css';

function FriendListItem({ img, name, status }) {
  return (
    <li className={clsx(status ? style.on : style.off)}>
      <img className={style.avatar} src={img} alt="User avatar" width="48" />
      <p className={style.name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
};

export default FriendListItem;
