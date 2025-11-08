import { assets } from "@/assets/assests";
import React from "react";

const OurPolicy = () => {
    return (
        <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700">
            <div>
                <img
                    src={assets.Logo}
                    className="w-12 m-auto mb-5"
                    alt="exchange_icon"
                />
                <p className="font-semibold">Easy Exchange Policy</p>
                <p className="text-gray-400">
                    We offer hassle free exchange policy
                </p>
            </div>
            <div>
                <img
                    src={assets.Logo}
                    className="w-12 m-auto mb-5"
                    alt="exchange_icon"
                />
                <p className="font-semibold">6 Days Return Policy</p>
                <p className="text-gray-400">
                    We provide 6 days free return policy
                </p>
            </div>
            <div>
                <img
                    src={assets.Logo}
                    className="w-12 m-auto mb-5"
                    alt="exchange_icon"
                />
                <p className="font-semibold">Best customer support</p>
                <p className="text-gray-400">
                    We provide 24/7 customer support  
                </p>
            </div>
        </div>
    );
};

export default OurPolicy;
