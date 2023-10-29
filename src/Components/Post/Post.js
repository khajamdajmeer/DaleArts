import React from 'react';
import './Post.css';
import profile1 from '../../Resources/ProfileImg/profile1.png';
import post1 from '../../Resources/ProfileImg/post1.png';
import profile2 from '../../Resources/ProfileImg/profile2.png';
import post2 from '../../Resources/ProfileImg/post2.png';
import likeicon from '../../Resources/icons/like.svg';
import commenticon from '../../Resources/icons/comment.svg';
import shareicon from '../../Resources/icons/share.svg';
const Post = () => {

const PostsData = [
  {name:'Lara Leones',Profileid:'thewallart',profileimg:profile1,post:post1,caption:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',Likescount:'9.8k',
comment:'8.6k',share:'7.2k'},
{name:'Thomas J.',Profileid:'thecustomcreater',profileimg:profile2,post:post2,caption:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',Likescount:'9.4k',
comment:'8.8k',share:'7.9k'}

]

  return (
    <>
    {PostsData.map((ele,index)=>{
    return ( <div className="post-container">
        <div className="post-header">
            <div className="profile">
                <img src={ele.profileimg} alt="" />
                <div className="profile-info">
                    <h3>{ele.name}</h3>
                    <h5>@{ele.Profileid}</h5>
                </div>
            </div>
            <button className="three-dots">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
            </button>
        </div>
        <div className="post-caption">
            <h4>{ele.caption}</h4>
        </div>
        <div className="post-img">
    <img src={ele.post} alt="" />
        </div>
        <div className="post-actions">
            <div className="post-likes postaction">
    <img src={likeicon} alt="" />
    <h4>{ele.Likescount}</h4>
            </div>
            <div className="post-likes postaction">
    <img src={commenticon} alt="" />
    <h4>{ele.comment}</h4>
            </div> <div className="post-likes postaction">
    <img src={shareicon} alt="" />
    <h4>{ele.share}</h4>
            </div>
      
        </div>
      </div>)
    })

    }
      
    </>
  );
}

export default Post;
