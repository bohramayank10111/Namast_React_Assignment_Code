import React from 'react'
import ResturantCard from './ResturantCard'



const BodyComponent = () => {
  const resList = [
    {
      uid: Math.random(),
      resName: "Behrouz Biryani",
      url: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/1a8dfa8b2a73ddf7c6193465ab24c898',
      cuisines: "North Indian, Hyderabadi biryani",
      avgRating: "4.5",
      cost: "390",
      costForTwo: "650",
      deliveryTime: "30min"
    },
    {
      uid: Math.random(),
      resName: "KFC",
      url: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/4c2ba743-170e-4a7d-b74d-077c5fac3fbb_655331.JPG',
      cuisines: "Burger ,fries etc",
      avgRating: "4.2",
      cost: "200",
      costForTwo: "326",
      deliveryTime: "15 min"
    },
    {
      uid: Math.random(),
      resName: "McDonald's",
      url: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/1/9/f05426f2-a35c-4c16-b0be-c7a3bb8e7d79_253768.JPG',
      cuisines: "Burger ,fries etc",
      avgRating: "4.0",
      cost: "300",
      costForTwo: "400",
      deliveryTime: "43 min"

    },
    {
      uid: Math.random(),
      resName: "Subway",
      url: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/6/12/caf13ff4-9cc6-4601-b2c0-822d90cb76d4_69061.jpg',
      cuisines: "wraps,rolls etc",
      avgRating: "4.2",
      cost: "189",
      costForTwo: "250",
      deliveryTime: "32 min"
    }
  ]
  return (
    <div className='body'>
      <div className='search' >
        Search
      </div>
      <div className='res-container'>
        {resList.map((resListItem) => (
          <ResturantCard key={resListItem.uid} resData={resListItem} />
        ))}


      </div>
    </div>
  )
}

export default BodyComponent