import React, { Component } from "react";
import PropTypes from "prop-types";
export default class ButtonCount extends Component {
  static propTypes = {
    defaultName: PropTypes.string,
    defaultNumb: PropTypes.number,
    count: PropTypes.className
  };

  state = {
    classCount: this.props.count,
    value: this.props.defaultNumb,
    textDefault: this.props.defaultName,
    valueIncrement: "Increment",
    valueDecrement: "Decrement",
    valueClear: "Clear"
  };

  newCount() {
    return (
      <div className="this.props.classCount">
        <button onClick={::this.incCount} value={this.state.valueIncrement} />
        <button onClick={::this.decrCount} value={this.state.valueDecrement} />
        <button onClick={::this.incCount} value={this.state.valueClear} />
        <input type="text" value={this.props.defaultNumb} />
      </div>
    );
  }

  incCount(v) {
    this.setState({ value: v.target.value + 1 });
  }

  decrCount(v) {
    this.setState({ value: v.target.value - 1 });
  }

  clearCount() {
    this.setState({ value: this.props.defaultNumb });
  }

  render() {
    return (
      <button className="" onClick={this.newCount}>
        {this.state.textDefault}
      </button>
    );
  }
}
