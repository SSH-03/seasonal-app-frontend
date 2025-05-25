import SSH_Logo from "./SSH_Logo.jpg"
import Logo from "./Logo.jpg"

export const assets = {
    SSH_Logo,
    Logo
}

export const products = [
  {
    _id: "aaaa",
    name: "Kites",
    description: "Used for flying",
    price: 50,
    image: [SSH_Logo],
    category: "Women",
    subCategory: "Topwear",
    sizes: ["S", "M", "L"],
    date: 1716634345448,
    bestseller: true,
  },
  {
    _id: "aaaaaa",
    name: "Kite Lamps",
    description: "Used for flying at Night",
    price: 250,
    image: [SSH_Logo, SSH_Logo, SSH_Logo,SSH_Logo],
    category: "Men",
    subCategory: "Topwear",
    sizes: ["S", "M", "L"],
    date: 1716634345448,
    bestseller: false,
  },
];