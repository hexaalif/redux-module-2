import "./App.css";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import { createContext, useEffect } from "react";
import { useState } from "react";
import ProductProvider from "./context/ProductProvider";

function App() {
  return (
    <div>
      <ProductProvider>
        <RouterProvider router={routes} />
      </ProductProvider>
    </div>
  );
}

export default App;
