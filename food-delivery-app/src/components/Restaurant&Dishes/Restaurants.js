import React, { useEffect, useContext } from "react";
import Res from "./Res";

import ResContext from "../../context/restaurant/resContext";

const Restaurants = () => {
  const resContext = useContext(ResContext);

  useEffect(() => {
    resContext.getAllRes();
  }, []);

  return <Res />;
};

export default Restaurants;
