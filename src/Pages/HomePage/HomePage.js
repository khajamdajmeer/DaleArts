import React, { useEffect } from 'react';
import './HomePage.css'
import { auth } from '../../FireBaseConfig';
import { useNavigate } from 'react-router-dom';
// import { onAuthStateChanged } from 'firebase/auth';  


const HomePage = () => {


    const history = useNavigate();
    useEffect(()=>{
        auth.onAuthStateChanged((user)=>{
            if(!user){
                history('/login')
            }
            else{
                
            }
        });
    },[])

    const handleLogout = () => {
        auth
          .signOut()
          .then(() => {
            // User has been successfully logged out
            console.log('User logged out');
          })
          .catch((error) => {
            // Handle any errors that occur during the sign-out process
            console.error('Error logging out:', error);
          });
      };
      

  return (
    <>
      this is home page
    </>
  );
}

export default HomePage;
