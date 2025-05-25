import BestSeller from "@/components/custom/BestSeller";
import LatestCollection from "@/components/custom/LatestCollection";
import OurPolicy from "@/components/custom/OurPolicy";
import SSHNA from "@/components/custom/SSHNA";
import React from "react";

const Home = () => {
    return (
        <div>
            <SSHNA />
            <LatestCollection />
            <BestSeller />
            <OurPolicy/>
        </div>
    );
};

export default Home;
