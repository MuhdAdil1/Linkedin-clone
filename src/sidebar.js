import React from 'react'
import "./Sidebar.css"
import { Avatar } from '@material-ui/core'
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

function sidebar() {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const user = useSelector(selectUser);

  const recentItem = (topic) => (
    <div className="sidebar_recentItem">
      <span className='sidebar_hash'>#</span>
      <p>{topic}</p>
    </div>
  );
  return (
    <div className="sidebar">
        <div className="sidebar_top">
            <img src="https://content.techgig.com/photo/87644309/Believe-It-Naruto-is-coming-to-Fortnite-this-November.jpg" alt="" />
            <Avatar src={user.photoUrl} className='sidebar_avatar'>
              {user.email[0]}
            </Avatar>
            <h2>{user.displayName}</h2>
            <h4>{user.email}</h4>
        </div>
        <div className="sidebar_stats">
          <div className="sidebar_stat">
            <p>who viewed you</p>
            <p className='sidebar_statNumber'>2445</p>
          </div>
          <div className="sidebar_stat">
            <p>Views on post</p>
            <p className='sidebar_statNumber'>3453</p>
          </div>
        </div>
        <div className="sidebar_bottom">
            <p>Recent</p>
            {recentItem("reactjs")}
            {recentItem("desining")}
            {recentItem("atificial intelligence")}
            {recentItem("developer")}
            {recentItem("gaming")}
        </div>
    </div>
  )
}

export default sidebar