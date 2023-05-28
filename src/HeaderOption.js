import React from 'react'
import './HeaderOption.css';
import {Avatar} from "@material-ui/core"
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
 
function HeaderOption({ avatar, Icon, title, onClick}) {
  const user = useSelector(selectUser)
    /* instead of using props we can directly use the argument
       so that we dont need to use props.argument and it can be
        little more cleaner*/
  return (
    <div onClick={onClick} className="headerOption">
        {Icon && <Icon className='headerOption_icon'/>}
        {avatar && (<Avatar className='headerOption_icon' src={user?.photoUrl}>
          {user?.email[0]}
        </Avatar>
        )}
        <h3 className='headerOption_title'>{title}</h3>
    </div>
  );
}

export default HeaderOption