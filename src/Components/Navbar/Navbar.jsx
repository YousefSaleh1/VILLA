import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { FaCalendar } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className=" header-area navbar navbar-expand-lg navbar-light bg-light">
      <div className="container container-fluid">
        <a href="index.html" className="logo navbar-brand">
          <h1>VILLA</h1>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse pages"
          id="navbarSupportedContent"
        >
          <ul className="nav">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/properties"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Properties
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/property-details"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Property Details
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact-us"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Contact Us
              </NavLink>
            </li>
            <li>
              <a href="#">
                <span className="visit-icon">
                  <FaCalendar />{" "}
                </span>
                Schedule a visit
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    // <nav className="navbar navbar-expand-lg bg-body-tertiary">
    //   <div className="header-area">
    //   <div className="container-fluid">
    //       <div className="row">
    //         <div className="col-12">
    //           <div className="main-nav">
    //             <a href="#" className="logo">
    //               <h1>Villa</h1>
    //             </a>
    //             <button
    //               className="navbar-toggler nav-but"
    //               type="button"
    //               data-bs-toggle="collapse"
    //               data-bs-target="#navbarSupportedContent"
    //               aria-controls="navbarSupportedContent"
    //               aria-expanded="false"
    //               aria-label="Toggle navigation"
    //             >
    //               <span className="navbar-toggler-icon"></span>
    //             </button>

    //             <div
    //               className="collapse navbar-collapse"
    //               id="navbarSupportedContent"
    //             >
    //               <ul className="navbar-nav nav me-auto mb-2 mb-lg-0">
    //                 <li className="nav-item">
    //                   <NavLink
    //                     to="/"
    //                     className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
    //                   >
    //                     Home
    //                   </NavLink>
    //                 </li>
    //                 <li className="nav-item">
    //                   <NavLink
    //                     to="/properties"
    //                     className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
    //                   >
    //                     Properties
    //                   </NavLink>
    //                 </li>
    //                 <li className="nav-item">
    //                   <NavLink
    //                     to="/property-details"
    //                     className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
    //                   >
    //                     Property Details
    //                   </NavLink>
    //                 </li>
    //                 <li className="nav-item">
    //                   <NavLink
    //                     to="/contact-us"
    //                     className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
    //                   >
    //                     Contact Us
    //                   </NavLink>
    //                 </li>
    //                 <li className="nav-item">
    //                   <a className="nav-link" href="#">
    //                     <span className="visit-icon">
    //                       <FaCalendar />{" "}
    //                     </span>
    //                     Schedule a visit
    //                   </a>
    //                 </li>
    //               </ul>
    //             </div>

    //             <span className="icon">
    //               <span></span>
    //               <span></span>
    //               <span></span>
    //             </span>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </nav>
  );
  // return (
  //   <div className="header-area">
  //     <div className="container">
  //       <div className="row">
  //         <div className="col-12">
  //           <div className="main-nav">
  //             <a href="#" className="logo">
  //               <h1>Villa</h1>
  //             </a>
  //             <ul className="nav">
  //               <li>
  // <NavLink
  //   to="/"
  //   className={({ isActive }) => (isActive ? "active" : "")}
  // >
  //   Home
  // </NavLink>
  // </li>
  // <li>
  // <NavLink
  //   to="/properties"
  //   className={({ isActive }) => (isActive ? "active" : "")}
  // >
  //   Properties
  // </NavLink>
  // </li>
  // <li>
  // <NavLink
  //   to="/property-details"
  //   className={({ isActive }) => (isActive ? "active" : "")}
  // >
  //   Property Details
  // </NavLink>
  // </li>
  // <li>
  //   <NavLink
  //     to="/contact-us"
  //     className={({ isActive }) => (isActive ? "active" : "")}
  //   >
  //     Contact Us
  //   </NavLink>
  // </li>
  // <li>
  //   <a href="#">
  //     <span className="icon">
  //       <FaCalendar />{" "}
  //     </span>
  //     Schedule a visit
  //   </a>
  // </li>
  //             </ul>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default Navbar;
