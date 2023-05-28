import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ChatIcon from '@material-ui/icons/Chat';
import { useDispatch } from 'react-redux';
import { logout } from './features/userSlice';
import { auth } from './firebase';

function Header() {
  const dispatch= useDispatch();

 const logoutOfApp= () => {
  dispatch(logout());
  auth.signOut();
}

  return (
    <div className='header'>
        <div className='header_left'>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/800px-LinkedIn_logo_initials.png" alt="" />

          <div className="header_search">
            <SearchIcon/>
            <input type="text" placeholder='Search' />

          </div>
        </div>
        <div className="header_right">
          {/*Passing the value for the title used in headeroptions */} 
            <HeaderOption Icon={HomeIcon} title="Home"/> 
            <HeaderOption Icon={SupervisorAccountIcon} title="Network"/>
            <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/> 
            <HeaderOption Icon={NotificationsIcon} title="Notification"/>
            <HeaderOption Icon={ChatIcon} title="Messages"/>  
            <HeaderOption avatar={true} title='me'
             onClick={logoutOfApp}
            />

        </div>
    
    </div>
  )
}

export default Header