import { assets } from "@/assets/assests";
import React from "react";

const Footer = () => {
    return (
        <div>
            <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
                {" "}
                <div>
                    <img src={assets.SSH_Logo} className="mb-5 w-32" alt="" />
                    <p className="w-full md:w-2/3 text-gray-600">
                        Vite is a build tool that aims to provide a faster and
                        more efficient development experience for modern web
                        projects.
                    </p>
                </div>
                <div>
                    <p className="text-xl font-medium mb-5">Company</p>
                    <ul className="flex flex-col gap-1 text-gray-600">
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div>
                    <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
                    <ul className="flex flex-col gap-1 text-gray-600">
                        <li>+91 6300188045</li>
                        <li>sshinnovations2024@gmail.com</li>
                    </ul>
                </div>
            </div>
            <div>
                <hr/>
                <p className="py-5 text-sm text-center">Copyright 2025@ forever.com - All Right Reserved.</p>
            </div>
        </div>
    );
};

export default Footer;
