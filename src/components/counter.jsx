import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value
  };

  constructor(props) {
    super(props);
    this.handleIncrement = this.handleIncrement.bind(this);
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <span className={this.getbadgeClasses()}>{this.state.value}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm m-2"
        >
          Increment
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={this.props.onDelete}
        >
          Delete
        </button>
      </div>
    );
  }
  getbadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    //const { value } = this.state.value;
    //return value === 0 ? "Zero" : value;
    //return ({this.state.value});
  }

  rendertags() {
    if (this.state.tags.length === 0) {
      return <p>Please enter atleast one tag</p>;
    } else {
      return this.state.tags.map(tag => <li key={tag}>{tag}</li>);
    }
  }

  handleIncrement = () => {
    //console.log(product);
    //console.log("This is class'  property", this);
    this.setState({ value: this.state.value + 1 });
  };
}

export default Counter;
