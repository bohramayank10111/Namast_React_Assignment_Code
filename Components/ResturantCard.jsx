import React from 'react'

const ResturantCard = ({ resData }) => {
  console.log(resData);
  const { cost,
    costForTwo,
    avgRating,
    cuisines,
    deliveryTime,
    url
    , resName

  } = resData
  return (
    <div className='res-card'>
      <img src={url} alt="res-logo" className='card-img-logo' />
      <h3>{resName}</h3>
      <h5>{cuisines}</h5>
      <h5>{avgRating}</h5>
      <h5>{costForTwo}</h5>
      <h5>{deliveryTime}</h5>
    </div>
  )
}

export default ResturantCard