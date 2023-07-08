import React from 'react'
import './CheckoutProduct.css'
import { styled } from '@mui/material'
import StarIcon from '@mui/icons-material/Star'
import { useStateValue } from './StateProvider'


const GoldStarIcon = styled(StarIcon)({
    color: '#FF9900', // Gold color
  })


function CheckoutProduct({ id, title, price, rating, image }) {
    
    const [, dispatch] = useStateValue()


    const removeFromCart = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id
        })
    }

    return (
    <div className='checkoutProduct'>
      <img className='checkoutProduct__image' src={image} alt=''/>
      <div className="checkoutProduct__info">
        <p className='checkoutProduct__title'>{title}</p>
        <p className='checkoutProduct__price'>
            <small>$</small>
            <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
            {
                Array(rating)
                .fill()
                .map((_, id) => (
                    <GoldStarIcon key={id} fontSize='inherit'/> 
                ))
            }
        </div>
        <button type='submit' className='checkoutProduct__removeFromCartButton'
                onClick={removeFromCart}>Remove from Cart</button>
      </div>
    </div>
  )
}

export default CheckoutProduct
