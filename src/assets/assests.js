import SSH_Logo from "./SSH_Logo.jpg";
import Logo from "./Logo.jpg";
import search_icon from "./search_icon.png";
import profile_icon from "./profile_icon.png";
import cart_icon from "./cart_icon.png";
import dropdown_icon from "./dropdown_icon.png";
import cross_icon from "./cross_icon.png";
import star_icon from "./star_icon.png";
import star_dull_icon from "./star_dull_icon.png";
import bin_icon from "./bin_icon.png";
import stripe_icon from "./stripe_icon.png";
import razorpay_icon from "./razorpay_icon.jpg";

export const assets = {
    SSH_Logo,
    Logo,
    search_icon,
    profile_icon,
    cart_icon,
    dropdown_icon,
    cross_icon,
    star_icon,
    star_dull_icon,
    bin_icon,
    stripe_icon,
    razorpay_icon
};

export const products = [
    {
        _id: "A1",
        name: "women top",
        description: "Used for flying",
        price: 550,
        image: [SSH_Logo],
        category: "Women",
        subCategory: "Topwear",
        sizes: ["S", "M", "L"],
        date: 1716634345448,
        bestseller: true,
    },
    {
        _id: "A2",
        name: "Men top",
        description: "Used for flying at Night",
        price: 250,
        image: [SSH_Logo, search_icon, profile_icon, cart_icon],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["S", "M", "L"],
        date: 1716634345448,
        bestseller: false,
    },
    {
        _id: "A2",
        name: "Men top 2",
        description: "Used for flying at Night two",
        price: 250,
        image: [SSH_Logo, search_icon, profile_icon, cart_icon],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["S", "M", "L"],
        date: 1716634345448,
        bestseller: false,
    },
    {
        _id: "A2",
        name: "Men top 3",
        description: "Used for flying at Night two",
        price: 250,
        image: [SSH_Logo, search_icon, profile_icon, cart_icon],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["S", "M", "L"],
        date: 1716634345448,
        bestseller: false,
    },
    {
        _id: "A2",
        name: "Men top 4",
        description: "Used for flying at Night two",
        price: 250,
        image: [SSH_Logo, search_icon, profile_icon, cart_icon],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["S", "M", "L"],
        date: 1716634345448,
        bestseller: false,
    },
    {
        _id: "A3",
        name: "Men bottom",
        description: "Used for flying at Night",
        price: 5250,
        image: [SSH_Logo, SSH_Logo, SSH_Logo, SSH_Logo],
        category: "Men",
        subCategory: "Bottomwear",
        sizes: ["S", "M", "L"],
        date: 1716634345448,
        bestseller: false,
    },
];
