import React from 'react';
import './Post.css';
import profile1 from '../../Resources/ProfileImg/profile1.png';
import post1 from '../../Resources/ProfileImg/post1.png';
import likeicon from '../../Resources/icons/like.svg';
import commenticon from '../../Resources/icons/comment.svg';
import shareicon from '../../Resources/icons/share.svg';
const Post = () => {
  return (
    <>
      <div className="post-container">
        <div className="post-header">
            <div className="profile">
                <img src={profile1} alt="" />
                <div className="profile-info">
                    <h3>Lara Leones</h3>
                    <h5>@thewallart</h5>
                </div>
            </div>
            <button className="three-dots">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
            </button>
        </div>
        <div className="post-caption">
            <h4>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</h4>
        </div>
        <div className="post-img">
    <img src={post1} alt="" />
        </div>
        <div className="post-actions">
            <div className="post-likes postaction">
    <img src={likeicon} alt="" />
    <h4>9.8k</h4>
            </div>
            <div className="post-likes postaction">
    <img src={commenticon} alt="" />
    <h4>8.6k</h4>
            </div> <div className="post-likes postaction">
    <img src={shareicon} alt="" />
    <h4>7.2k</h4>
            </div>
      
        </div>
      </div>
    </>
  );
}

export default Post;
