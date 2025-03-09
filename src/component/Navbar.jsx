import  { useState } from "react";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import p1 from "/img/image 1099.png";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="duration-200">
      <div className="container py-3 sm:py-0">
        <div className="flex justify-between items-center">
          <div className="flex justify-between items-center gap-4">
            <Link to="/order">
              <button className="bg-gradient-to-r from-amber-700 to-amber-400 text-white py-1 px-4 rounded-full flex items-center gap-3 hover:scale-105 duration-200">
                سفارش
                <FaShoppingCart />
              </button>
            </Link>
            <ul className="hidden sm:flex items-center gap-4">
              <li>
                <Link to="/" className="hover:text-yellow-500 inline-block py-4 px-4">
                  خانه
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-yellow-500 inline-block py-4 px-4">
                  خدمات ما
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-yellow-500 inline-block py-4 px-4">
                  بلاگ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
              Food Party
              <img src={p1} className="w-12" alt="Food Party Logo" />
            </a>
          </div>
          <div className="sm:hidden">
            <button onClick={toggleMenu} className="text-2xl">
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
    
    
        {isMenuOpen && (
          <div className="sm:hidden">
            <ul className="flex flex-col items-center gap-4 mt-4">
              <li>
                <Link to="/" className="hover:text-yellow-500 inline-block py-2 px-4">
                  خانه
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-yellow-500 inline-block py-2 px-4">
                  خدمات ما
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-yellow-500 inline-block py-2 px-4">
                  بلاگ
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}