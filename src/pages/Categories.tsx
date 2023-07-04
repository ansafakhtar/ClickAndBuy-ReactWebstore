import "../components/BestSellers/BestSellers.css";
import { Outlet } from "react-router";
import CategoriesTypes from "../components/CategoriesTypes";

function Categories() {
  return (
    <>
      <CategoriesTypes />
      <Outlet />
    </>
  );
}

export default Categories;
