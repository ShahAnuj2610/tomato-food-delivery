import * as PropTypes from "prop-types";
import React from "react";

export function OrderFooter(props) {
  const { disabled, onSubmit, orderTotal } = props;
  return (
    <div className="footer-copyright">
      <div className="container">
        <a className="waves-effect waves-light btn">
          Order Total: {orderTotal ? `$${orderTotal}` : 0}
        </a>
      </div>
      {orderTotal > 0 && (
        <button
          className={`btn waves-effect waves-light ${
            disabled ? "disabled" : null
          }`}
          type="submit"
          name="action"
          onClick={onSubmit}
        >
          Order Now<i className="material-icons right">send</i>
        </button>
      )}
    </div>
  );
}

OrderFooter.propTypes = {
  orderTotal: PropTypes.any,
  disabled: PropTypes.bool,
  onSubmit: PropTypes.func
};
