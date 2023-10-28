// import React, { useState } from "react";
// import Search from "../Search/Search.Component";
// import FiltersTypes from "../FiltersTypes/FiltersTypes.Component";
// import FilterSource from "../FilterSource/FilterSource.Component";
// import FilterOrder from "../FilterOrder/FilterOrder.component";
// import ResetFilters from "../FilterReset/FilterReset.component";

// import "./FiltersBar.Styles.css";

// const FiltersBar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <div className="filters-bar">
//       <Search className="filter" />
//       <div
//         className="hamburger-menu"
//         onClick={toggleMenu}>
//         Filters ☰ 
//       </div>
//       <div className={`filter-container ${isMenuOpen ? "menu-open" : ""}`}>
//         <FilterSource className="filter" />
//         <FilterOrder className="filter" />
//         <FiltersTypes className="filter" />
//         <ResetFilters className="filter" />
//       </div>
//     </div>
//   );
// };

// export default FiltersBar;

import React from "react";

import Search from "../Search/Search.Component"
import FiltersTypes from "../FiltersTypes/FiltersTypes.Component";
import FilterSource from "../FilterSource/FilterSource.Component";
import FilterOrder from "../FilterOrder/FilterOrder.component";
import ResetFilters from "../FilterReset/FilterReset.component";

import "./FiltersBar.Styles.css";

const FiltersBar = () => {
  return (
    <div className="filters-bar">
      <Search className="filter"/>
      <FilterSource className="filter" />
      <FilterOrder className="filter"/>
      <FiltersTypes className="filter"/>
      <ResetFilters className="filter"/>
    </div>
  );
};

export default FiltersBar;
