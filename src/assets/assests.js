import SSH_Logo from "./SSH_Logo.jpg"
import Logo from "./Logo.jpg"
import search_icon from "./search_icon.png";
import profile_icon from "./profile_icon.png";
import cart_icon from "./cart_icon.png";
import dropdown_icon from "./dropdown_icon.png";
import cross_icon from "./cross_icon.png";

export const assets = {
    SSH_Logo,
    Logo,
    search_icon,
    profile_icon,
    cart_icon,
    dropdown_icon,
    cross_icon,
};

export const products = [
  {
    _id: "aaaa",
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
    _id: "aaaaaa",
    name: "Men top",
    description: "Used for flying at Night",
    price: 250,
    image: [SSH_Logo, SSH_Logo, SSH_Logo,SSH_Logo],
    category: "Men",
    subCategory: "Topwear",
    sizes: ["S", "M", "L"],
    date: 1716634345448,
    bestseller: false,
  },
  {
    _id: "aaaaaa",
    name: "Men bottom",
    description: "Used for flying at Night",
    price: 5250,
    image: [SSH_Logo, SSH_Logo, SSH_Logo,SSH_Logo],
    category: "Men",
    subCategory: "Bottomwear",
    sizes: ["S", "M", "L"],
    date: 1716634345448,
    bestseller: false,
  },
];