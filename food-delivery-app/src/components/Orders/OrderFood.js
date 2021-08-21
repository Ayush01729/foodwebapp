import React from "react";
import PropTypes from "prop-types";

const OrderFood = ({ order }) => {
  const { amount, resName, dishdesc } = order;

  return (
    <div id="order-item" className="card orange darken-4">
      <div className="card-content white-text">
        <div className="flow-text center">₹ {amount}</div>
        <blockquote>
          <p style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>
            {resName}
          </p>
        </blockquote>
      </div>
      <div className="card-action">
        <span
          style={{ width: "100%" }}
          className="activator btn center"
          data-target={order._id}
        >
          View Orders
        </span>
      </div>
      <div className="card-reveal">
        <span className="card-title grey-text text-darken-4">
          Your Order <i className="material-icons right">Close</i>
        </span>
        <ul className="collection">
          {dishdesc.map(
            (data) =>
              data.quantity > 0 && (
                <li key={data.dish._id} className="collection-item">
                  {data.dish.name}
                  <div className="secondary-content">
                    Quantity: {data.quantity}
                  </div>
                </li>
              )
          )}
        </ul>
      </div>
    </div>
  );
};

OrderFood.propTypes = {
  order: PropTypes.object.isRequired,
};

export default OrderFood;
