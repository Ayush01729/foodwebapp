import React, { useEffect, useContext } from "react";
import OrderFood from "./OrderFood";
import Loader from "../layout/Spinner";

import ResContext from "../../context/restaurant/resContext";

const Orders = () => {
  const resContext = useContext(ResContext);
  const { orders, loading } = resContext;

  const getMyOrders = async () => {
    await resContext.getMyOrders();
  };

  useEffect(() => {
    getMyOrders();
  }, []);

  if (loading) {
    return <Loader />;
  } else if (orders != null && orders.length === 0 && !loading) {
    return <h3>Please place your order</h3>;
  } else {
    return (
      <div className="section-grid-2" style={OrderStyle}>
        {orders &&
          orders.length > 0 &&
          orders.map((order) => <OrderFood key={order._id} order={order} />)}
      </div>
    );
  }
};

const OrderStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gridGap: "1rem",
};

export default Orders;
