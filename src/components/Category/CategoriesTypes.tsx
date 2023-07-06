import { SetStateAction, useState } from "react";
import { Link } from "react-router-dom";
import "./CategoriesTypes.css";

const CategoriesTypes = (): JSX.Element => {
  const [btnName, setBtnName] = useState("All");

  const handleBtnName = (e: SetStateAction<string>) => {
    setBtnName(e);
  };

  return (
    <>
      <div className="container">
        <div className="catego-header">
          <div className="title-home">
            <Link onClick={() => window.scrollTo(0, 0)} to="/">
              <i className="fa-solid fa-angle-left"></i> Home
            </Link>
            <h3>{btnName}</h3>
          </div>
          <div className="filter-btns">
            <Link to="all" onClick={() => handleBtnName("all")}>
              <button>All</button>
            </Link>
            <Link to="furniture">
              <button onClick={() => handleBtnName("furnitures")}>
                Furniture
              </button>
            </Link>
            <Link to="electronics">
              <button onClick={() => handleBtnName("electronics")}>
                Electronics
              </button>
            </Link>
            <Link to="lamps">
              <button onClick={() => handleBtnName("lamps")}>Lamps</button>
            </Link>
            <Link to="kitchen">
              <button onClick={() => handleBtnName("kitchen")}>Kitchen</button>
            </Link>
            <Link to="chairs">
              <button onClick={() => handleBtnName("chairs")}>Chairs</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default CategoriesTypes;
