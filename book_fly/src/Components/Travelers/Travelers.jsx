import React from 'react'
import paris from '../assets/paris.jpg'
import traveler1 from '../assets/traveler1.jpg'
import london from '../assets/london.jpg'
import dubai from '../assets/dubai.jpg'
import hong from '../assets/Hong Kong.jpg'
import  traveler2 from '../assets/traveler2.jpg'





//Use high order array method to call mp to diaplay all data
 const travelers=[
  {
    id: 1,
    destinationImage: paris,
    travelerImage: traveler1,
    travelerName: 'IsraTech',
    socialLink: '@isratech8'
  },
  {
    id: 2,
    destinationImage: london,
    travelerImage: traveler2,
    travelerName: 'FangLang',
    socialLink: '@fanglang2'
  },
  {
    id: 3,
    destinationImage: dubai,
    travelerImage: traveler1,
    travelerName: 'Xaoiki',
    socialLink: '@xioki4'
  },
  {
    id: 4,
    destinationImage: hong,
    travelerImage: traveler2,
    travelerName: 'FangLie',
    socialLink: '@fanglie1'
  }
 ]

const Travelers = () => {
  return (
    <div className='travelers container section'>
      <div className="sectionContainer">
        <h2>Top Travelering Destination of the month!</h2>
        <div className="travelersContainer grid">
          {
            travelers.map(({id,destinationImage,travelerImage,travelerName,socialLink})=>{
              return(
                <div key={id} className="singletraveler">
                  <img src={destinationImage} className='destinationImage' />
                  <div className="travelerDetail">
                    <div className="travelerPicture">
                      <img src={travelerImage} className='travelerImage' />
                    </div>
                    <div className="travelerName">
                      <span>{travelerName}</span>
                      <p>{socialLink}</p>
                    </div>
                  </div>
               </div>
              )
            })
          }
        </div>
      </div>

    </div>
  )
}

export default Travelers