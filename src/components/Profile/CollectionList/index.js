import React from 'react';
import { withRouter } from 'react-router-dom';
import MomentThumbnail from '../../MomentView/components/Thumbnail';
import StartPlayCard from '../../MomentView/components/Thumbnail/StartPlayCard';

const ProfileCollection = ({ history, user, title, className, collection }) => (
  <div className={className}>
    <div className="collection-header">
      <span className="title">{title}</span>
      <span
        className="see-all-btn"
        onClick={() => history.push(`/user-collection/${user}/rewards`)}
      >
        See all
      </span>
    </div>
    <div className="user-moments-container">
      {collection.map(moment => (
        <MomentThumbnail key={moment.id} id={moment.id} type={moment.type} />
      ))}
      {!collection.length && <StartPlayCard />}
    </div>
  </div>
);

export default withRouter(ProfileCollection);
