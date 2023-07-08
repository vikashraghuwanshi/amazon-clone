import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useStateValue } from './StateProvider'
import { signOut } from 'firebase/auth';
import { auth } from './firebase';


function Navbar() {

    const [ { basket, user } ] = useStateValue()
    console.log('Basket: ')
    console.log(basket)

  return (
    <nav className='navbar'>

        {/* logo - img */}
        <Link to='/'>
            <img 
                className='navbar__logo' 
                src='/images/amazon-logo.png' 
                alt=''
            />
        </Link>

        {/* search box */}

        <div className="navbar__search">
            <div class="dropdown">
                <button class="dropdown__button">
                    <span class="dropdown__initialCategory">All</span>
                    <span class="dropdown__arrow"></span>
                </button>
                <div class="dropdown__menu">
                    <Link to='/'>Amazon Devices</Link>
                    <Link to='/'>Amazon Fashion</Link>
                    <Link to='/'>Amazon Fresh</Link>
                    <Link to='/'>Amazon Pharmacy</Link>
                    <Link to='/'>Appliances</Link>
                    <Link to='/'>Apps & Games</Link>
                    <Link to='/'>Beauty</Link>
                    <Link to='/'>Books</Link>
                    <Link to='/'>Computers & Accessories</Link>
                    <Link to='/'>Amazon Devices</Link>
                    <Link to='/'>Amazon Fashion</Link>
                    <Link to='/'>Amazon Fresh</Link>
                    <Link to='/'>Amazon Pharmacy</Link>
                    <Link to='/'>Appliances</Link>
                    <Link to='/'>Apps & Games</Link>
                    <Link to='/'>Beauty</Link>
                    <Link to='/'>Books</Link>
                    <Link to='/'>Computers & Accessories</Link>
                </div>
            </div>

            <input type="text" placeholder='Search Amazon' 
                className="navbar__searchInput" />
            <SearchIcon className='navbar__searchIcon'/>
        </div>

        {/* 3 links */}

        <div className="navbar_items">
            {/* 1st link */}

            <Link to={!user && '/login'} className='navbar__link'>
                {user !== null &&
                    <div class="dropdown">
                        <button class="dropdown__buttonLogout">
                            <div className='navbar__option'>
                                <span className='navbar__optionLineOne'>Hello</span>
                                <span className='navbar__optionLineTwo'>{user.email.split('@')[0]}</span>
                            </div>
                            <span class="dropdown__arrowLogout"></span>
                        </button>
                        <div class="dropdown__menuLogout">
                            <Link to='/' onClick={()=>signOut(auth)} className='dropdown__logout'>Logout</Link>
                        </div>
                    </div>
                }

                {user === null && <div className='navbar__option'>
                                    <span className='navbar__optionLineOne'>Hello</span>
                                    <span className='navbar__optionLineTwo'>Sign In</span>
                                  </div>
                }
            </Link>

            {/* 2nd link */}

            <Link to='/' className='navbar__link'>
                <div className='navbar__option'>
                    <span className='navbar__optionLineOne'>Returns</span>
                    <span className='navbar__optionLineTwo'>& Orders</span>
                </div>
            </Link>

            {/* 3rd link */}

            <Link to='/' className='navbar__link'>
                <div className='navbar__option'>
                    <span className='navbar__optionLineOne'>Your</span>
                    <span className='navbar__optionLineTwo'>Prime</span>
                </div>
            </Link>

            {/* 4th link */}
            {/* basket icon with number */}

            <Link to='/checkout' className='navbar__link'>
                <div className='navbar__optionCart'>
                    <ShoppingCartOutlinedIcon fontSize='large' 
                        className='navbar__optionCartIcon'/>
                    <div className='navbar__cartCount'>
                        <span className='navbar__optionCartCount'>{basket?.length}</span>
                        <span className='navbar__optionLineTwo'>Cart</span>
                    </div>
                </div>
            </Link>

        </div>
      
    </nav>
  )
}

export default Navbar
