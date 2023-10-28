import React, { useEffect } from 'react';
import './HomePage.css'
import { auth } from '../../FireBaseConfig';
import { useNavigate } from 'react-router-dom';
// import { onAuthStateChanged } from 'firebase/auth';  
import Searchicon from '../../Resources/icons/searchicon.svg';
import filtericon from '../../Resources/icons/filtericon.svg';
import homeicon from '../../Resources/icons/home.svg';
import notifyicon from '../../Resources/icons/notification.svg';
import hearticon from '../../Resources/icons/heart.svg';
import msgicon from '../../Resources/icons/message.svg';
import walleticon from '../../Resources/icons/wallet.svg';
import subscribeicon from '../../Resources/icons/favorite.svg';
import profileicon from '../../Resources/icons/profile.svg';
import settingicon from '../../Resources/icons/setting.svg';
import logouticon from '../../Resources/icons/logout.svg';
import Post from '../../Components/Post/Post';
import Pricing from '../../Components/Pricings/Pricing';

const HomePage = () => {


  const history = useNavigate();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (!user) {
        history('/login')
      }
      else {

      }
    });
    // eslint-disable-next-line
  }, [])

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
      <div className="Home-FullScreen-container">
        <div className="Home-container">
          <div className="container-grid">
            <div className="grid-item grid-top grid-1">LOGO</div>
            <div className="grid-item grid-top grid-2">
              <img src={Searchicon} alt="" />
              <input className='searchinput' type="text" placeholder='search' />
              <button className='filter-btn'>
                <img src={filtericon} alt="" />
                <span>Filters</span>
              </button>
            </div>
            <div className="grid-item grid-top grid-3">
              <button className="become-seller-btn">Become a Seller</button>
            </div>
            <div className="grid-item grid-bottom grid-4">
              <ul className="menu-list">
                <li className="list-item">
                  <button className='list-btn'><img src={homeicon} className='listicons' alt="" />Home</button>
                </li>
                <li className="list-item">
                <button className='list-btn'><img src={notifyicon} className='listicons' alt="" />Notifications</button>
                </li>
                <li className="list-item">
                <button className='list-btn'><img src={hearticon} className='listicons' alt="" />Shop</button>
                </li>
                <li className="list-item">
                <button className='list-btn'><img src={msgicon} className='listicons' alt="" />Conversation</button>
                </li>
                <li className="list-item">
                <button className='list-btn'><img src={walleticon} className='listicons' alt="" />Wallet</button>
                </li>
                <li className="list-item">
                <button className='list-btn'><img src={subscribeicon} className='listicons' alt="" />Subscription</button>
                </li>
                <li className="list-item">
                <button className='list-btn'><img src={profileicon} className='listicons' alt="" />My Profile</button>
                </li>
                <li className="list-item">
                <button className='list-btn'><img src={settingicon} className='listicons' alt="" />settings</button>
                </li>
              </ul>
              <button className='list-btn btn-logout' onClick={handleLogout}><img src={logouticon} className='listicons' alt="" />Logout</button>
            </div>
            <div className="grid-item grid-bottom grid-5">
              <Post/>
              <Post/>
              <Post/>
              <Post/>
              <Pricing/>
            </div>
            <div className="grid-item grid-bottom">6</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
