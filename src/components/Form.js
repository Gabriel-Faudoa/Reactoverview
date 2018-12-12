import React, { Component } from "react";
import { Link } from "react-router-dom";

class Form extends Component {

state = {
  name:"",
  address:"",
  phone:""
}

handleSubmit = () => {
  Event.preventDefault()
  const data = JSON.stringify({...this.state})
  fetch ('localhost: 4000', {
    method: 'POST',
    body: data,
    headers: {
      "Content-Type": "application/json"
    }
  })
}

  render() {
    console.log(this)
    console.log(this.state)
    return (
      <div>
        <h1>Form</h1>
        <br/>
                <Link to="/home">Home</Link>
                <br/>
                <Link to="/people">People</Link>
        <br/>
        <br/>
        <form onSubmit={this.handleSubmit}>
          <div class="form-group">
            <label for="exampleInputEmail1">Name</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Name"
              onChange={e => this.setState({name: e.target.value})}
            />
            
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Address</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Address"
              onChange={e => this.setState({address: e.target.value})}
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Phone</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Phone"
              onChange={e => this.setState({phone: e.target.value})}
            />
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
