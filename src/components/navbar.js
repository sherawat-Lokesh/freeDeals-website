import React from "react";
import ClearAllIcon from "@mui/icons-material/ClearAll";
import "tachyons";
import "./navbar.css";



const Navbar = () => {
  return (
    <div className="navbar w-100 h3">


      <ClearAllIcon
        className="fr white hover-moon-gray"
        sx={{ fontSize: 40 }}
      />
    </div>
  );
};

export default Navbar;
