import React from 'react'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {RiAccountPinCircleLine} from 'react-icons/ri'
import {RxCalendar} from 'react-icons/rx'

import { Link } from 'react-router-dom';

const Search = () => {
 
  return (
    <div className='search container section'>
      <div className="sectionContainer grid">
        <div className="btns flex">
          <div className="singleBtn">
            <span>One Way</span>
          </div>
          <div className="singleBtn">
            <span>Round Trip</span>
          </div>
          <div className="singleBtn">
            <span>Multi City</span>
          </div>
        </div>

        <div className="searchInputs flex">
          <div className="singleInput flex">
              <div className="iconDiv">
                <HiOutlineLocationMarker className='icon'/>
              </div>
              <div className="texts">
                <h4>Location From</h4>
                <input type="text" placeholder='From' />
              </div>
          </div>
          <div className="singleInput flex">
              <div className="iconDiv">
                <HiOutlineLocationMarker className='icon'/>
              </div>
              <div className="texts">
                <h4>Location To</h4>
                <input type="text" placeholder='To' />
              </div>
          </div>

          <div className="singleInput flex">
              <div className="iconDiv">
                <RxCalendar className='icon'/>
              </div>
              <div className="texts">
                <h4>Departure</h4>
                <input type="date" placeholder='Add Date' />
              </div>
          </div>
          <div className="singleInput flex">
              <div className="iconDiv">
                <RxCalendar className='icon'/>
              </div>
              <div className="texts">
                <h4>Return</h4>
                <input type="date" placeholder='Add Date' />
              </div>
          </div>
          <div className="singleInput flex">
              <div className="iconDiv">
                <RiAccountPinCircleLine className='icon'/>
              </div>
              <div className="texts">
                <h4>Travelers</h4>
                <input type="number" placeholder='Add Guests' />
              </div>
          </div>

          <Link to="/next"className="link-no-underline">
            <button className='btn btnBlock flex'>Search Flights</button>
          </Link>
          
        </div>
      </div>

    </div>
  )
}

export default Search