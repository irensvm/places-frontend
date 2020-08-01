import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

export default class AddPlace extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      imageUrl:
        "https://images.unsplash.com/photo-1560930950-5cc20e80e392?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
      loc: {
        type: 'Point',
        coordinates: [22.5330804, 23.3972939],
      },
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const body = {
      name: this.state.name,
      description: this.state.description,
    };
    axios.post("http://localhost:5000/api/places", this.state).then((response) => {
      this.setState({
        name: "",
        description: "",
        imgUrl: "",
      });
      //this.props.updateData();
      this.props.history.push('/list')
    });
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div className="container-fluid card align-center">
        <h1 className="text-center">Share your experience</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Title</label>
            <input
              className="form-control"
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>

          <br />
          <div className="form-group">
            <label>Description</label>
            <input
              className="form-control"
              type="text"
              name="description"
              value={this.state.description}
              onChange={this.handleChange}
            />
          </div>

          <input
            type="submit"
            className="btn btn-primary"
            value="Create Place"
          />
        </form>
      </div>
    );
  }
}
