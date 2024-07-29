import React from "react";
import ProfileInfo from "../cards/ProfileInfo";
import { useNavigate } from "react-router-dom";
import SearchBar from "../search-bar/SearchBar";

const Navbar = () => {

  const navigate = useNavigate();

  const onLogout = () => {
    navigate('/login');
  };
    return (
        <>
      <div className="bg-white flex items-center justify-between px-6 py-2 drop-shadow">
        <h2 className="text-xl font-meduim text-black py-2">Notes</h2>

        <SearchBar />
        <ProfileInfo onLogout={onLogout}/>
      </div>
        </>
    )
}

export default Navbar;