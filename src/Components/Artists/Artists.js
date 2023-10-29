import React from 'react';
import './Artists.css';
import artist1 from '../../Resources/Artists/a1.png';
import aritstprofile1 from '../../Resources/Artists/pa1.png';
import a2 from '../../Resources/Artists/a2.png';
import pa2 from '../../Resources/Artists/pa2.png';
import a3 from '../../Resources/Artists/a3.png';
import pa3 from '../../Resources/Artists/pa3.png';
import a4 from '../../Resources/Artists/a4.png';
import pa4 from '../../Resources/Artists/pa4.png';
import a5 from '../../Resources/Artists/a5.png';


const Artists = () => {

const artistData = [
    {name:'Thomas Edward',profile:aritstprofile1,background:artist1},
    {name:'Chris Doe',profile:pa2,background:a2},
    {name:'Emilie Jones',profile:pa3,background:a3},
    {name:'Jessica Williams',profile:pa4,background:a4},
    {name:'Andy Flour',profile:pa2,background:a5},
]

  return (
    <>
    {artistData.map((ele,index)=>{
        return(
<div className="Artist-container">
        <img src={ele.background} alt="" className='artist-backgoround'/>
        <div className="artist-profile">
                <img src={ele.profile} alt="" className='artist-img'/>
                <div className="artist-info">
                    <h3>{ele.name}</h3>
                    <h5>@thewildwithyou</h5>
                </div>
        </div>
      </div>
        )
    })}
      
    </>
  );
}

export default Artists;
