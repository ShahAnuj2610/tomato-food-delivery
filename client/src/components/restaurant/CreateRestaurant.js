import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Loader } from "../Loader";
import { pick } from "lodash";
import { MealRow } from "../meals/MealRow";
import { RestaurantDetails } from "./RestaurantDetails";
import { MealTable } from "../meals/MealTable";

class CreateRestaurant extends Component {
  state = { userInfo: {}, _meals: [{ name: "", price: 0, description: "" }] };

  async componentDidMount() {
    this.setState({ loading: true });
    const response = await axios("/api/users");
    this.setState({ userInfo: response.data, loading: false });
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onAdd = () => {
    const { _meals } = this.state;
    this.setState({
      _meals: [..._meals, { name: "", price: 0, description: "" }]
    });
  };

  onDelete = index => {
    const { _meals } = this.state;
    this.setState({
      _meals: [..._meals.slice(0, index), ..._meals.slice(index + 1)]
    });
  };

  onRowDataChange = (e, field, index) => {
    const meals = [...this.state._meals];
    this.setState({
      _meals: [
        ...meals.slice(0, index),
        { ...meals[index], [field]: e.target.value },
        ...meals.slice(index + 1)
      ]
    });
  };

  onSubmit = async e => {
    e.preventDefault();
    this.setState({ loading: true });
    try {
      await axios.post(
        "/api/restaurants",
        pick(this.state, ["name", "type", "description", "_meals"])
      );
      alert(`Restaurant ${this.state.name} successfully created.`);
      this.props.history.push("/restaurants");
    } catch (e) {
      this.setState({ loading: false });
      alert("Restaurant creation failed");
    }
  };

  render() {
    const { name, type, description, userInfo, _meals, loading } = this.state;
    if (loading) return <Loader />;
    if (userInfo.role !== "manager") return "You are not authorized.";
    return (
      <div className="container">
        <div className="row">
          <form noValidate onSubmit={this.onSubmit}>
            <RestaurantDetails
              onChange={this.onChange}
              name={name}
              type={type}
              description={description}
            />
            <h3>Meals</h3>
            <MealTable
              meals={_meals}
              render={(meal, index) => {
                const { price, description: mealDesc, name: mealName } = meal;
                return (
                  <MealRow
                    key={index}
                    onNameChange={e => this.onRowDataChange(e, "name", index)}
                    name={mealName}
                    onPriceChange={e => this.onRowDataChange(e, "price", index)}
                    price={price}
                    onDescriptionChange={e =>
                      this.onRowDataChange(e, "description", index)
                    }
                    description={mealDesc}
                    meals={_meals}
                    onDelete={() => this.onDelete(index)}
                  />
                );
              }}
            />
            <a
              onClick={this.onAdd}
              className="btn-floating btn-large waves-effect waves-light red"
            >
              <i className="material-icons">add</i>
            </a>
            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <button
                style={{
                  width: "150px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                  marginTop: "1rem"
                }}
                type="submit"
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              >
                Create Restaurant
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(CreateRestaurant);
