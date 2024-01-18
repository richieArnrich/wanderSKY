import React from "react";
import AdminFooter from "./AdminFooter";
import AdminHeader from "./AdminHeader";

function Layout(props) {
  return (
    <div>
      <AdminHeader></AdminHeader>
      <main style={{ height: "125vh" }}>{props.children}</main>
      <AdminFooter></AdminFooter>
    </div>
  );
}

export default Layout;
