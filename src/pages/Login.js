import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { loginUserAPI } from "../services/user";

const Login = () => {
  const history = useHistory();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const resp = await loginUserAPI(values);
      console.log("resp", resp);
      localStorage.setItem("jwtToken", JSON.stringify(resp.data?.token));
      toast.success(resp.data?.message);
      history.push("/");
    } catch (error) {
      const { response } = error;
      console.error(response);
      toast.error(response?.data?.message);
      setIsLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="col-md-6 offset-md-3">
        <h2 className="text-center my-4">Login</h2>
        <form name="form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <div className="form-group text-center my-4">
            <button
              type="submit"
              disabled={isLoading}
              className="btn btn-danger"
            >
              Login
            </button>
            {isLoading && (
              <img
                src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="
                className="loading"
                alt="loading"
              />
            )}
          </div>
          <div className="text-center text-bold">
            <Link to={"/register"}>Register Here</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
