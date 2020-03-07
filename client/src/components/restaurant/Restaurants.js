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

    return (
      <div className="container valign-wrapper">
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
