import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import DateRangePicker from "./DatePicker/DateRangePicker";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fromDate: null,
      toDate: null
    };
  }
  setFromDate = date => {
    this.setState({ fromDate: date });
  };
  setToDate = date => {
    this.setState({ toDate: date });
  };
  render() {
    return (
      <div className="datepicker-component">
        <DateRangePicker />
      </div>
    );
  }
}

export default App;
