import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Routes from "./routes/routes";

const CloseButton = ({ closeToast }) => (
  <i onClick={closeToast} className="la la-close notifications-close" />
);

function App() {
  return (
    <div>
      <ToastContainer
        position="bottom-left"
        autoClose={2000}
        hideProgressBar={false}
        closeButton={<CloseButton />}
      />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
