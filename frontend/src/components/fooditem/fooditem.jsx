import React, { useState } from 'react'
import './fooditem.css'
import { assets } from '../../assets/assets'
import './fooditem.css'

const Fooditem = ({ id, image, name, description, price }) => {

  const [itemCount, setItemCount] = useState(0);
  const handleAdd = () => {
    setItemCount(prev => prev + 1);
  }
  const handleremove = () => {
    setItemCount(prev => prev - 1);
  }

  return (
    <div className='food-item'>
      <div className="food-item-img-container">
        <img className='food-item-image' src={image} alt=''></img>
        {!itemCount ? <img className='add' onClick={handleAdd} src={assets.add_icon_white} alt=""></img>
          : <div className="food-item-counter">
            <img onClick={handleremove} src={assets.remove_icon_red} alt=''></img>
            <p>{itemCount}</p>
            <img onClick={handleAdd} src={assets.add_icon_white} alt=""></img>
          </div>

        }
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />

        </div>
        <p className='food-item-desc'>{description}</p>
        <p className='food-item-price'>${price}</p>

      </div>


    </div>
  )
}

export default Fooditem