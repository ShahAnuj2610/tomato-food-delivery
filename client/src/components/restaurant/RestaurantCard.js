import * as PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

export function RestaurantCard(props) {
  const { description, name, _id } = props.rest;
  return (
    <div className="col s4 m4">
      <div className="card blue-grey darken-1">
        <div className="card-content white-text">
          <span className="card-title">{name}</span>
          <p>{description}</p>
        </div>
        <div className="card-action">
          <Link to={`/restaurants/${_id}`}>Order Now</Link>
        </div>
      </div>
    </div>
  );
}

RestaurantCard.propTypes = { rest: PropTypes.any };
