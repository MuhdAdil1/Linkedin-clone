import React, { useEffect } from 'react';
import './App.css';
import Login from './Login';
import Header from './Header';
import Sidebar from './sidebar';
import Feed from './Feed';
import { login, selectUser } from './features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from './firebase';
import { logout } from './features/userSlice';
import Widgets from './Widgets';


function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if(userAuth){
        //user is logged in
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL,
        }))
      }else{
        //user is logged out
        dispatch(logout());
      }
    })
  }, [])


  return (
    <div className="app">
      <Header />

      {!user ? (
        <Login />
      ) : (
        <div className="app_body">
        <Sidebar />
        <Feed />
       <Widgets />
       </div>
      )}
      
    </div>
  );
}

export default App;
