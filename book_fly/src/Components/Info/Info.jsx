import React from 'react'
import { RxCalendar } from 'react-icons/rx'
import { BsBookmarkCheck, BsShieldCheck } from 'react-icons/bs'

const Info = () => {
  return (
    <div className='info section'>
      <div className="infoContainer container">
        <div className="titleDiv flex ">
          <h2>Travel to make meemories all around the world</h2>
          <button className='btn'>
            View All
          </button>
        </div>
        <div className="cardsDiv grid">
          <div className="singleCard grid">
            <div className="iconDiv  flex colorOne">
              <RxCalendar className='icon'/>
            </div>
            <span className="cardTitle">Book & Realx</span>
            <p>You can also call airlines from your phone and book the flight tickets!</p>
          </div>
          <div className="singleCard grid">
            <div className="iconDiv flex colorTwo">
              <BsShieldCheck className='icon'/>
            </div>
            <span className="cardTitle">Smart Checklist</span>
            <p>You can also call airlines from your phone and book the flight tickets!</p>
          </div>
          <div className="singleCard grid">
            <div className="iconDiv flex">
              <BsBookmarkCheck className='icon'/>
            </div>
            <span className="cardTitle">Save More</span>
            <p>You can also call airlines from your phone and book the flight tickets!</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Info