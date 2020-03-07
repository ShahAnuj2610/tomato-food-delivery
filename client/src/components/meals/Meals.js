import React, { Component } from "react";
import get from "lodash/get";
import axios from "axios";

import { Loader } from "../Loader";

class Meals extends Component {
  state = { meals: [], loading: false };

  async componentDidMount() {
    console.log("this props", this.props);
    try {
      this.setState({ loading: true });
      const response = await axios(
        `/api/restaurants/${get(this.props.match, "params.id")}`
      );
      this.setState({ meals: response.data._meals, loading: false });
    } catch (e) {
      console.error(e);
      this.setState({ loading: false });
    }
  }

  render() {
    const { loading, meals } = this.state;

    return (
      <div className="container valign-wrapper">
        <div className="row">
          <div className="landing-copy col s12 center-align">
            {loading ? (
              <Loader />
            ) : (
              <ul className="collection">
                {meals.map(meal => (
                  <li key={meal.name} className="collection-item">
                    {meal.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Meals;
