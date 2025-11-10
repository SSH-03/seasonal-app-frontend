import { createContext, useState } from "react";
import { products } from "@/assets/assests";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const currency = "₹";
    const delivery_fee = 34;
    const [search, setSearch] = useState("");
    const [showSearch, setShowSearch] = useState(false);

    // we will add any state variable or function with in this value object and we can access in any component via Context API
    const value = {
        products,
        currency,
        delivery_fee,
        search,
        setSearch,
        showSearch,
        setShowSearch,
    };

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
