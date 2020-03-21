import * as PropTypes from "prop-types";
import React from "react";

export function MealTable(props) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>{props.meals.map(props.render)}</tbody>
    </table>
  );
}

MealTable.propTypes = {
  meals: PropTypes.any,
  render: PropTypes.func
};
