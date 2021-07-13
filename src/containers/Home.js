import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserProfile, logoutUser } from "../redux/actions/user";

const Home = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user?.user);

  useEffect(() => {
    dispatch(getUserProfile());
  }, [dispatch]);

  const handleLogout = (id) => {
    const result = window.confirm("Are you sure to logout?");
    if (result) {
      dispatch(logoutUser());
    }
  };

  return (
    <div className="container text-center">
      <h1>Hi {user?.name}!</h1>
      <p>You're logged in with React Hooks!!</p>
      <button className="btn btn-primary ml-auto" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Home;
