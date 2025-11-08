import BestSeller from "@/components/custom/BestSeller";
import LatestCollection from "@/components/custom/LatestCollection";
import NewsletterBox from "@/components/custom/NewsletterBox";
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
            <NewsletterBox/>
        </div>
    );
};

export default Home;
