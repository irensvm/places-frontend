import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

export default class AddPlace extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const body = {
      title: this.state.title,
      description: this.state.description,
    };
    axios.post("http://localhost:5000/api/", body).then((response) => {
      this.setState({
        title: "",
        description: "",
      });
      this.props.updateData();
      return <Redirect to='/list' />
    });

    

  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div className="container-fluid card align-center" >
      <h1 className="text-center">Share your experience</h1>
        <form onSubmit={this.handleSubmit}>
        <div className="form-group">
        <label>Title</label>
          <input className="form-control"
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
          />
        </div>
        
          <br />
          <div className="form-group">
          <label>Description</label>
          <input className="form-control"
            type="text"
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
          />
          </div>
         
          <input type="submit" className="btn btn-primary" value="Create Place" />
        </form>
      </div>
    );
  }
}
