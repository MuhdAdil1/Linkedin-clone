import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { auth } from './firebase';
import './Login.css';
import { login } from './features/userSlice';

function Login() {
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[name, setName] = useState("");
    const[profilePic, setProfilePic] = useState("");
    const dispatch = useDispatch();

    const register = () =>  {
        if(!name){
            return alert("Please enter a full name!");
        }

        auth.createUserWithEmailAndPassword(email, password)
        .then((userAuth) => {
            userAuth.user.updateProfile({
                displayName: name,
                photoURL: profilePic,
            })
            .then(() => {
                dispatch(
                 login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: name,
                    photoURL: profilePic,
                }));
            });
        }).catch(error => alert(error));
    };

    const loginToApp = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
        .then(userAuth => {
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                photoUrl: userAuth.user.photoURL,
            }))
        }).catch(error => {
            alert("You havent registered yet.Register to use our service")
        })


    };
  return (
    <div className='login'>
       <img 
       src="https://logos-download.com/wp-content/uploads/2016/03/LinkedIn_Logo_2019.png" 
       alt="" />

       <form>
        <input value={name} onChange={e => setName(e.target.value)} 
         type="text" 
         placeholder='Full Name (Required if registering)' 
        />
       
       <input value={profilePic} onChange={e => setProfilePic(e.target.value)} 
         type="text"
         placeholder='Profile pic URL (optional)' 
        />

       <input value={email} onChange={e => setEmail(e.target.value)}
         type="Email"
         placeholder='Email'
        />

       <input value={password} onChange={e => setPassword(e.target.value)}
         type="password"
         placeholder='Password'
        />

       <button type='submit' onClick={loginToApp}>Sign in</button>
       </form>

       <p>Not a member?{"  "}
       <span className='login_register' onClick={register}>Register Now</span>
       </p>
       
    </div>
  )
}

export default Login