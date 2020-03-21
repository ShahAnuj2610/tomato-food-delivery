import * as PropTypes from "prop-types";
import React from "react";

export function RestaurantDetails(props) {
  return (
    <>
      <div className="input-field col s12">
        <input
          onChange={props.onChange}
          value={props.name}
          id="name"
          type="text"
        />
        <label htmlFor="name">Restaurant Name</label>
      </div>
      <div className="input-field col s12">
        <input
          onChange={props.onChange}
          value={props.type}
          id="type"
          type="text"
        />
        <label htmlFor="type">Restaurant Type</label>
      </div>
      <div className="input-field col s12">
        <input
          onChange={props.onChange}
          value={props.description}
          id="description"
          type="text"
        />
        <label htmlFor="description">Restaurant Description</label>
      </div>
    </>
  );
}

RestaurantDetails.propTypes = {
  onChange: PropTypes.func,
  name: PropTypes.any,
  type: PropTypes.any,
  description: PropTypes.any
};
