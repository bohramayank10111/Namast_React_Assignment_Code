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
    // https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/9/1/168b416e-8d8d-44f9-9858-32a8710059a1_55471.JPG
    // "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2025/3/7/2d666689-2283-4dc4-9b11-133ee22b7dab_fb005baf-18a2-4047-826a-e9d4000928a2.jpg_compressed"
    <div className='res-card'>
      <img src={url} alt="res-logo" className='card-img-logo' />
      {/* https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/FOOD_CATALOG/IMAGES/CMS/2025/3/7/2d666689-2283-4dc4-9b11-133ee22b7dab_fb005baf-18a2-4047-826a-e9d4000928a2.jpg_compressed */}
      {/* FOOD_CATALOG/IMAGES/CMS/2024/10/8/0207a852-2b35-4894-be30-f020abf0b7ce_c5b5c334-3e0a-4ad5-bd53-dc5566e62eba.jpg */}
      <h3>{resName}</h3>
      <h5>{cuisines}</h5>
      <h5>{avgRating}</h5>
      <h5>{costForTwo}</h5>
      <h5>{deliveryTime}</h5>
    </div>
  )
}

export default ResturantCard