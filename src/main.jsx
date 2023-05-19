import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import { makeServer } from "./server.js";
import { HomeContextProvider } from "./context/HomeContext.jsx";
import { ProductContextProvider } from "./context/ProductContext.jsx";
import { DataContextProvider } from "./context/DataContext.jsx";

// Call make Server
makeServer();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <DataContextProvider>
        <HomeContextProvider>
          <ProductContextProvider>
            <App />
          </ProductContextProvider>
        </HomeContextProvider>
      </DataContextProvider>
    </Router>
  </React.StrictMode>
);
