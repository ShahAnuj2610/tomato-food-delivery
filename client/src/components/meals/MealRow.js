import * as PropTypes from "prop-types";
import React from "react";

export function MealRow(props) {
  return (
    <tr>
      <td>
        <input onChange={props.onNameChange} value={props.name} type="text" />
      </td>
      <td>
        <input
          onChange={props.onPriceChange}
          value={props.price}
          type="number"
        />
      </td>
      <td>
        <input
          onChange={props.onDescriptionChange}
          value={props.description}
          type="text"
        />
      </td>
      {props.meals.length > 1 && (
        <td>
          <i
            style={{ color: "indianred", cursor: "pointer" }}
            className="material-icons"
            onClick={props.onDelete}
          >
            delete
          </i>
        </td>
      )}
    </tr>
  );
}

MealRow.propTypes = {
  onNameChange: PropTypes.func,
  name: PropTypes.any,
  onPriceChange: PropTypes.func,
  price: PropTypes.any,
  onDescriptionChange: PropTypes.func,
  description: PropTypes.any,
  meals: PropTypes.any,
  onDelete: PropTypes.func
};
