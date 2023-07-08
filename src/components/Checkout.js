import React from 'react'
import Navbar from './Navbar'
import './Checkout.css'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'
import FlipMove from 'react-flip-move';


function Checkout() {

  const [ { basket } ] = useStateValue()

  return (
    <React.Fragment>
      <div className="checkout">
        <Navbar/>
        <div style={{ display: 'flex' }}>
          <img className='checkout__ad' 
              src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg'
              alt=''
          />
          {basket?.length > 0 && (
              <div className='checkout__subtotal'>
                  <Subtotal/>
              </div>
            )}
        </div>

        <div className='checkout_items'>

          {basket?.length === 0 ? (
              <div>
                <h2>Shopping Cart is empty</h2>
                <p>
                  You have no items in your basket. 
                  To buy one or more items,
                  click "Add to Basket" button next to the item.
                </p>
              </div>
          ) : (
            <div>
                <h2 className='checkout__title'>Your Shopping Cart</h2>

                {/* List out all of the items in the cart */}

                <div className="contain">
                <FlipMove appearAnimation='accordionHorizontal'>
                  {basket.map((item) => {
                    return <div key={item.id}>
                              <CheckoutProduct
                                            key={item.id}
                                            id={(item.id)}
                                            title={item.title}
                                            price={item.price}
                                            rating={item.rating}
                                            image={item.image}
                                            />
                    </div>
                  })}
                </FlipMove>
                </div>
            </div>
          )}
        </div>
      </div>
    </React.Fragment>
  )
}

export default Checkout
