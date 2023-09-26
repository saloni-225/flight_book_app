import React from 'react'
import imageGrid from '../assets/ImageGrid.png'
const Lounge = () => {
  return (
    <div className='lounge container section'>
      <div className="sectionContainer grid">
        <div className="imgDiv">
          <img src={imageGrid} alt="" />
        </div>

        <div className="textDiv">
          <h2>Unaccompanied Minor Lounge</h2>
          <div className="grids grid">
          <div className="singleGrid">
            <span className="gridTitle">
              Help through the airport
            </span>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum tempora autem voluptatem repudiandae, officiis similique numquam inventore in voluptates recusandae?</p>
          </div>
          <div className="singleGrid">
            <span className="gridTitle">
              Chauffer-drive service
            </span>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum tempora autem voluptatem repudiandae, officiis similique numquam inventore in voluptates recusandae?</p>
          </div>
          <div className="singleGrid">
            <span className="gridTitle">
              Priority Boarding
            </span>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum tempora autem voluptatem repudiandae, officiis similique numquam inventore in voluptates recusandae?</p>
          </div>
        </div>
        </div>
        
      </div>
    </div>
  )
}

export default Lounge