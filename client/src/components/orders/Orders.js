import React, { Component } from "react";
import axios from "axios";

import { Loader } from "../Loader";
import { OrderCard } from "./OrderCard";

class Orders extends Component {
  state = { orders: [], loading: false };

  async componentDidMount() {
    try {
      this.setState({ loading: true });
      const response = await axios("/api/orders");
      this.setState({ orders: response.data, loading: false });
    } catch (e) {
      console.error(e);
      this.setState({ loading: false });
    }
  }

  render() {
    const { loading, orders } = this.state;

    if (orders.length === 0 && !loading)
      return <div className="center">No Orders Found.</div>;

    return (
      <div className="container" style={{ width: "100%" }}>
        <div className="row">
          <div className="landing-copy col s12 center-align">
            {loading ? (
              <Loader />
            ) : (
              <div className="row">
                {orders.map(rest => (
                  <OrderCard key={rest._id} order={rest} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Orders;
