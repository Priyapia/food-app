import React from "react";
import { Link, Outlet } from "react-router-dom";

function Product() {
  return (
    <>
      <h1>Product Page</h1>
      <nav>
        <Link to="nestedroute" style={{ padding: "40px" }}>
          {" "}
          Nestedroute
        </Link>
        <Link to="nestedcontact">
          {" "}
          <button>Nested contact us</button>
        </Link>
      </nav>
      <Outlet />
    </>
  );
}

export default Product;
