"use client"
import { useState, useContext, createContext, useEffect } from "react";

import { toast } from 'react-hot-toast'
import { Toaster } from 'react-hot-toast';

let foundProduct;
let index;

const Context = createContext();

export const StateContext = ({children}) => {

    const[showCart, setShowCart] = useState(false)

    const[cartItems, setCartItems] = useState([])

    const [totalPrice, setTotalPrice] = useState(0)

    const[totalQuantities, setTotalQuantities] = useState(0)

    const[qty, setQty] = useState(1)

    const onAdd = (product, quantity) => {
        const checkProductInCart = cartItems.find((item) => item._id === product._id)

        setTotalPrice((prevtotalPrice) => prevtotalPrice + product.price * quantity)
        setTotalQuantities((prevtotalQuantities) => prevtotalQuantities + quantity)
        
        if (checkProductInCart) {    
            const updatedCartItems = cartItems.map((cartProduct) =>{
            if(cartProduct._id === product._id) return {
                ...cartProduct,
                quantity : cartProduct.quantity + quantity
            }
        })
        
        setCartItems(updatedCartItems)
        }
        else {
        product.quantity = quantity;

        setCartItems([...cartItems, {...product}])
        }
        toast.success(`${qty} ${product.name} added succfully ajomi`)
        console.log("product", product)
        console.log("quantity", quantity)
        console.log("cartItems", cartItems)
    
    }

    const incQty = () =>{
        setQty((prevQty) => prevQty + 1)
    }


    const decQty = () => {
        setQty((prevQty) => {
            if(prevQty - 1 < 1){
                console.log("zkegnzngjkz")
                toast.error(`Can't go lower`)
                return 1;
            } 
            
            return prevQty - 1
        })
    }

    const toogleCartItemQuantity = (value, id) => {
        foundProduct = cartItems.find((item) => item_id == id)
        index = cartItems.findIndex((product) => product._id == id)
        
        if(value === 'inc'){
            let newCartItems = [...cartItems, {...foundProduct, quantity : foundProduct.quantity + 1}]
            setCartItems(newCartItems)
            setTotalPrice((prevtotalPrice) => prevtotalPrice + foundProduct.price)
            setTotalQuantities((prevtotalQuantities) => prevtotalQuantities  + 1)
        }

        else if(value === 'dec'){
            let newCartItems = [...cartItems, {...foundProduct, quantity : foundProduct.quantity - 1}]
            setCartItems(newCartItems)
            setTotalPrice((prevtotalPrice) => prevtotalPrice  - foundProduct.price)
            setTotalQuantities((prevtotalQuantities) => prevtotalQuantities - 1)
        }
    }

    
    return(
        <Context.Provider value={{
            showCart,
            setShowCart,
            cartItems,
            totalPrice,
            totalQuantities,
            qty,
            incQty,
            decQty,
            onAdd,
            toogleCartItemQuantity
        }}>
            {/* <Layout></Layout> */}
            {children}
        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context)