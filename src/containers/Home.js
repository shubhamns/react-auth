import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserProfile } from "../redux/actions/user";

const Home = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user?.user);

  useEffect(() => {
    dispatch(getUserProfile());
  }, [dispatch]);

  const handleLogout = (id) => {
    const result = window.confirm("Are you sure to delete this user?");
    if (result) {
    }
  };

  return (
    <div className="container">
      <h1 className="text-center">Home</h1>
      <button className="btn btn-primary ml-auto" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Home;
