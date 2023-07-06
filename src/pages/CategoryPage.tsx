import "../components/BestSellers/BestSellers.css";
import { Outlet } from "react-router";
import CategoriesTypes from "../components/Category/CategoriesTypes";

function Categories(): JSX.Element {
  return (
    <>
      <CategoriesTypes />
      <Outlet />
    </>
  );
}

export default Categories;
