import PropTypes from 'prop-types';
import style from './Profile.module.css';

function Profile({ username, tag, location, avatar, stats }) {
  return (
    <div className={style.profile}>
      <div className={style.description}>
        <img src={avatar} alt="User avatar" className={style.avatar} />
        <p>{username}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>

      <ul className={style.stats}>
        <li className={style.item}>
          <span>Followers:</span>
          <span>{stats.followers}</span>
        </li>
        <li className={style.item}>
          <span>Views:</span>
          <span>{stats.views}</span>
        </li>
        <li className={style.item}>
          <span>Likes:</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

export default Profile;
