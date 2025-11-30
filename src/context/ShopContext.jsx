import { createContext, useEffect, useState } from "react";
import { products } from "@/assets/assests";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const currency = "₹";
    const delivery_fee = 34;
    const [search, setSearch] = useState("");
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});
    const navigate = useNavigate()

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

    const getCartCount=() => {
        let totalCount=0;
        for(const items in cartItems) { //iterate the items
            for(const item in cartItems[items]) { // iterate the each product size
                try {
                    if (cartItems[items][item] > 0) {
                        totalCount += cartItems[items][item]
                    }
                    
                } catch (error) {
                    
                }
            }
        }
        return totalCount
    }

    // // useEffect for when the cartItems are get modified 
    // useEffect(()=>{
    //     console.log(cartItems);
        
    // },[cartItems])

    const updateQuantity = async(itemId, size, quantity) => {

        let cartData = structuredClone(cartItems)
        cartData[itemId][size] =quantity
        setCartItems(cartData)
    }

    const getCartAmount = () =>{
        let totalAmount = 0
        for(const items in cartItems) {
            let itemInfo = products.find((product)=>product._id === items)
            for(const item in cartItems[items]) {
                try {
                    if (cartItems[items][item] > 0) {
                        totalAmount += itemInfo.price * cartItems[items][item]
                    }
                } catch (error) {
                    
                }
            }
        }
        return totalAmount
    }

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
        addToCart,
        getCartCount,
        updateQuantity,
        getCartAmount,
        navigate
    };

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
