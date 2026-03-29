// import React from "react";
// import "./header.css";
// import { Link } from "react-router-dom";

// const Header = ({ isAuth }) => {
//   return (
//     <header>
//       <div className="logo">E-Learning</div>

//       <div className="link">
//         <Link to={"/"}>Home</Link>
//         <Link to={"/courses"}>Courses</Link>
//         <Link to={"/about"}>About</Link>
//         {isAuth ? (
//           <Link to={"/account"}>Account</Link>
//         ) : (
//           <Link to={"/login"}>Login</Link>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Header;



// import React, { useState } from "react";
// import "./header.css";
// import { Link } from "react-router-dom";

// const Header = ({ isAuth }) => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <header>
//       <div className="logo">E-CourseSelling</div>

//       {/* Hamburger */}
//       <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
//         {menuOpen ? "✖" : "☰"}
//       </div>

//       <div className={`link ${menuOpen ? "active" : ""}`}>
//         <Link to={"/"} onClick={() => setMenuOpen(false)}>Home</Link>
//         <Link to={"/courses"} onClick={() => setMenuOpen(false)}>Courses</Link>
//         <Link to={"/about"} onClick={() => setMenuOpen(false)}>About</Link>
//         {isAuth ? (
//           <Link to={"/account"} onClick={() => setMenuOpen(false)}>Account</Link>
//         ) : (
//           <Link to={"/login"} onClick={() => setMenuOpen(false)}>Login</Link>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Header;




import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = ({ isAuth }) => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <header className="nav-header">
      <div className="nav-logo">E-CourseSelling</div>

      {/* Hamburger */}
      <div className="nav-hamburger" onClick={toggleMenu}>
        {openMenu ? "✖" : "☰"}
      </div>

      {/* Navigation */}
      <nav className={`nav-links ${openMenu ? "nav-active" : ""}`}>
        <Link to="/" onClick={() => setOpenMenu(false)}>Home</Link>
        <Link to="/courses" onClick={() => setOpenMenu(false)}>Courses</Link>
        <Link to="/about" onClick={() => setOpenMenu(false)}>About</Link>

        {isAuth ? (
          <Link to="/account" onClick={() => setOpenMenu(false)}>Account</Link>
        ) : (
          <Link to="/login" onClick={() => setOpenMenu(false)}>Login</Link>
        )}
      </nav>
    </header>
  );
};

export default Header;