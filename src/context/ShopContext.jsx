import { createContext, useEffect, useState } from "react";
import { products } from "@/assets/assests";
import { toast } from "react-toastify";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const currency = "₹";
    const delivery_fee = 34;
    const [search, setSearch] = useState("");
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});

    const addToCart = async(itemId, size )=>{

        // Feature: react toastify for getting toast if the size was not selected
        if(!size) {
            toast.error('Select product Size')
            return // we need to stop the flow 
        }

        let cartData = structuredClone(cartItems)
        if(cartData[itemId]){
            if(cartData[itemId][size]){
                cartData[itemId][size] +=1
            }
            else{
                cartData[itemId][size]=1
            }
        }
        else{
            cartData[itemId]={}
            cartData[itemId][size]=1
        }
        setCartItems(cartData)

    }

    // useEffect for when the cartItems are get modified 
    useEffect(()=>{
        console.log(cartItems);
        
    },[cartItems])

    // we will add any state variable or function with in this value object and we can access in any component via Context API
    const value = {
        products,
        currency,
        delivery_fee,
        search,
        setSearch,
        showSearch,
        setShowSearch,
        cartItems,
        addToCart
    };

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
