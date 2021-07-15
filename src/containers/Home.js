import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getUserProfile, logoutUser } from "../redux/actions/user";

const Home = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user?.user);

  useEffect(() => {
    dispatch(getUserProfile());
  }, [dispatch]);

  const handleLogout = (id) => {
    const result = window.confirm("Are you sure to logout?");
    if (result) {
      dispatch(logoutUser(history));
    }
  };

  return (
    <div className="container text-center">
      <h1>
        Hi <br />
        {user && <span>{user?.name} !</span>}
      </h1>
      <button className="btn btn-primary ml-auto" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Home;
