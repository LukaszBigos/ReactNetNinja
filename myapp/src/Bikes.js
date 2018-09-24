import React from 'react'

const Bikes = ({bikes}) => {
  
  const bikesList = bikes.map(bike => {
    
    if(bike.type === 'enduro') {
      return (
        <div className="ninja" key={bike.id}>
          <div>Brand: { bike.brand }</div>
          <div>Model: { bike.model }</div>
          <div>Type: { bike.type }</div>
      </div>
      )
    } else {
      return (
        <div key={bike.id}>
          <p>Missing Trail bike</p>
        </div>
      );
    }
  })
  return (
    <div>
      { bikesList }
    </div>
  )
}
  

export default Bikes