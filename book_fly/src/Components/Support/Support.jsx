import React from 'react'
import gridImage from '../assets/collage.png'
const Support = () => {
  return (
    <div className="support container section">
      <div className="sectionContainer">
        <div className="tittleDiv">
          <small>Travel Support</small>
          <h2>Plan Your Travel With Confidence</h2>
          <p>Find Help With Booking and Travel Plans,see what to expect along the journey</p>
        </div>
        <div className="infoDiv grid">
          <div className="textDiv grid">
            <div className="singleInfo">
              <span className="number colorOne">01</span>
              <h4>Travel Requirements for Dubai</h4>
              <p>
                Find help with the booking and travel plans,see what to expect along the journey to your favourite destinations!
              </p>
            </div>
            <div className="singleInfo">
              <span className="number colorTwo">02</span>
              <h4>Chauffer services at your arrival</h4>
              <p>
                Find help with the booking and travel plans,see what to expect along the journey to your favourite destinations!
              </p>
            </div>
            <div className="singleInfo">
              <span className="number">03</span>
              <h4>Multi risk travel insurance</h4>
              <p>
                Find help with the booking and travel plans,see what to expect along the journey to your favourite destinations!
              </p>
            </div>
          </div>
          <div className="imgDiv">
            <img src={gridImage} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Support