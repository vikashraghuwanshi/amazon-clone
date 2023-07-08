import React from 'react'
import './Product.css'
import { styled } from '@mui/material'
import StarIcon from '@mui/icons-material/Star'
import { useStateValue } from './StateProvider'


const GoldStarIcon = styled(StarIcon)({
    color: '#FF9900', // Gold color
  })


function Product({ id, title, price, rating, image }) {

    const [, dispatch] = useStateValue()

    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id, title, price, rating, image
            }
        })
    }

  return (
    <React.Fragment>
        <div className='product'>
            <div className="product__info">
                <p>{title}</p>
                <p className='product__price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {
                        Array(rating)
                        .fill()
                        .map((_, id) => (
                            <GoldStarIcon key={id} fontSize='inherit'/> 
                        ))
                    }
                </div>
            </div>
            <img src={image} alt=''/>
            <button type='submit' className='product__button'
                onClick={addToBasket}>Add to Cart</button>
        </div>
    </React.Fragment>
  )
}

export default Product
