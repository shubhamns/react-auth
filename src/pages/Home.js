import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { userMeAPI, logoutUser } from "../services/user";

const Home = () => {
  const history = useHistory();
  const [user, setUser] = useState();

  useEffect(() => {
    loadUserProfile();
  }, []);

  const loadUserProfile = async () => {
    try {
      const resp = await userMeAPI();
      console.log("resp", resp);
      setUser(resp.data.response);
    } catch (error) {
      const { response } = error;
      console.error(response);
    }
  };

  const handleLogout = () => {
    const result = window.confirm("Are you sure to logout?");
    if (result) {
      logoutUser(history);
    }
  };

  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <p className="navbar-brand w-100" style={{ textAlign: "center" }}>
          React 17 Auth App
        </p>
      </nav>
      <div className="container text-center">
        <h1>
          Hi, <br />
          {user && <span>{user?.name}</span>}
        </h1>
        <button className="btn btn-danger ml-auto" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </React.Fragment>
  );
};

export default Home;
