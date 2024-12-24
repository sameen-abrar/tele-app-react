import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Contact from "../models/Contact";
import { Link, useNavigate } from "react-router-dom";

const AppNavbar = () => {
  const [menu, setMenu] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const navigate = useNavigate();

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  const openForm = () => {
    setShowForm(true);
    setMenu(false);
  };
  const closeForm = () => {
    setShowForm(false);
  };

  return (
    <div className=" fixed w-full z-10 text-white">
      <div>
        <div className="flex flex-row justify-between p-5 md:px-32 px-5 bg-backgroundColor shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
          <div className="flex flex-row items-center cursor-pointer">
            <Link to="/">
              <h1 className="text-2xl font-semibold">TeleHealth.</h1>
            </Link>
          </div>
          <nav className="hidden lg:flex flex-row items-center text-lg font-medium gap-8">
            {/* Navigation properties */}
            
          </nav>
        </div>
      </div>
    </div>
  );
};

export default AppNavbar;
