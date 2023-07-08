// {
//     id:"12321341",
//     title:"The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback",
//     price:11.96,
//     rating:5,
//     image:"https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
// },
// {
//     id:"23445930",
//     title:"Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric",
//     price:15,
//     rating:3,
//     image:"https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
// }



export const initialState = {
    basket: [],
    user: null
}


export const getBasketTotal = (basket) => 
    basket?.reduce((amount, item) => item.price + amount, 0)


function reducer(state, action) {
    console.log('Action: ')
    console.log(action)
    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'ADD_TO_BASKET':
            // logic for adding item in the basket
            return { ...state,
                        basket: [...state.basket, action.item]
            }
        case 'REMOVE_FROM_BASKET':
            // logic for removing item in the basket

            return {
                ...state,
                basket: state.basket.filter((item) => item.id !== action.id)
            }
        default:
            return state

    }
}

export default reducer