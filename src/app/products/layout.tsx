import FilterComponent from "@/components/products/client/BtnFilters";
import React from "react";

function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <header>
        <FilterComponent/>
    </header>
      <main>{children}</main>
    </>
  );
}

export default layout;
