import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import { makeServer } from "./server.js";
import { DataContextProvider } from "./context/DataContext.jsx";
import { AuthContextProvider } from "./context/AuthContext.jsx";

// Call make Server
makeServer();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <DataContextProvider>
        <AuthContextProvider>
          <App />
        </AuthContextProvider>
      </DataContextProvider>
    </Router>
  </React.StrictMode>
);
