import React, { useEffect, useContext } from "react";
import AuthContext from "../context/auth/authContext";
import "./Home.css";

const Home = (props) => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/home");
    }
  });

  return (
    <div id="showcase" id="card">
      <div className="card-container valign-wrapper white-text center">
        <div className="card transparent">
          <div className="card-content center">
            <h2 className="">
              <span className="red-text text-darken-4">Zoomato</span>
            </h2>
            <p className="flow-text black-text">
              Order now your favourite food
            </p>
            <p className="lead">
              Order now and get tasty restaurant like food at your home.
            </p>
          </div>
          <div className="card-action">
            <div className="card-links">
              <a
                href="/register"
                className="btn btn-large waves-effect waves-light red darken-3"
                style={{ marginRight: "16px" }}
              >
                Register
              </a>
              <a
                href="/login"
                className="btn btn-large waves-effect grey darken-3"
                style={{ marginLeft: "16px" }}
              >
                Login
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
