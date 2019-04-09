import React, { Component } from "react";
import DatePicker from "./DatePicker";

class DateRangePicker extends Component {
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
      <DatePicker
        setFromDate={this.setFromDate}
        setToDate={this.setToDate}
        fromDate={this.state.fromDate}
        toDate={this.state.toDate}
      />
    );
  }
}

export default DateRangePicker;
