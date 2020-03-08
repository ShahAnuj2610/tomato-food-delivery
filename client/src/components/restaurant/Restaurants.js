import React, { Component } from "react";
import axios from "axios";

import { Loader } from "../Loader";
import { RestaurantCard } from "./RestaurantCard";

class Restaurants extends Component {
  state = { restaurants: [], loading: false };

  async componentDidMount() {
    try {
      this.setState({ loading: true });
      const response = await axios("/api/restaurants");
      this.setState({ restaurants: response.data, loading: false });
    } catch (e) {
      console.error(e);
      this.setState({ loading: false });
    }
  }

  render() {
    const { loading, restaurants } = this.state;

    if (restaurants.length === 0 && !loading)
      return <div className="center">No Restaurants Found.</div>;

    return (
      <div className="container" style={{ width: "100%" }}>
        <div className="row">
          <div className="landing-copy col s12 center-align">
            {loading ? (
              <Loader />
            ) : (
              <div className="row">
                {restaurants.map(rest => (
                  <RestaurantCard key={rest._id} rest={rest} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Restaurants;
