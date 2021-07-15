import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store from "./store/store";
import { persistor } from "./store/store";
import Routes from "./routes/routes";
import Loader from "./components/Loader";

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

      <Provider store={store}>
        <PersistGate loading={<Loader />} persistor={persistor}>
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
