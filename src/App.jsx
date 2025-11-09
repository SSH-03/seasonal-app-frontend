import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import PlaceOrder from "./pages/PlaceOrder";
import Orders from "./pages/Orders";
import Navbar from "./components/custom/Navbar";
import Footer from "./components/custom/Footer";

function App() {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
      <Footer/>
      {/* <div className="text-center danger ">
        <h1 className="text-2xl text-green-500 underline">
          Seasonal Products Application
        </h1>
        <div className="flex flex-col items-center justify-center h-40">
          <h4 className="text-yellow-300 ">Munagapati Midhun Naga Sai - CSE</h4>
          <h4 className="text-yellow-300 bg-red-700">Harsha Sree</h4>
        </div>
        <Button disabled>
          <Loader2 className="animate-spin" />
          Started Building on 27-04-2025
        </Button>
      </div> */}
    </div>
  );
}

export default App;
