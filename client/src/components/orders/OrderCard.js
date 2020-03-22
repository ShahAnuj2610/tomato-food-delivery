import * as PropTypes from "prop-types";
import React from "react";

export function OrderCard(props) {
  const { description, _restaurant, status, total_amount } = props.order;
  return (
    <div className="col s4 m4">
      <div className="card blue-grey darken-1">
        <div className="card-content white-text">
          <span className="card-title">{_restaurant.name}</span>
          <p>{description}</p>
        </div>
        <div className="card-panel teal lighten-2">
          {[
            "placed",
            "cancelled",
            "processing",
            "in_route",
            "delivered",
            "received"
          ].map(stat => (
            <div
              style={{
                cursor: "pointer",
                color: status === stat ? "green" : "unset",
                fontWeight: status === stat ? 800 : "unset"
              }}
              className="chip"
              onClick={() => props.onStatusChange(stat)}
            >
              {stat}
            </div>
          ))}
          <div style={{ fontWeight: 700 }}>Total amt: {total_amount}</div>
        </div>
      </div>
    </div>
  );
}

OrderCard.propTypes = { order: PropTypes.any };
