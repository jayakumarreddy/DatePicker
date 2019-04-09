import React, { Component } from "react";
import "./DatePicker.css";
import WeekDays from "./WeekDays";

class DatePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedYear: new Date().getFullYear(),
      selectedMonth: new Date().getMonth()
    };
  }

  setSelectedMonth = month => {
    this.setState({ selectedMonth: month });
  };

  render() {
    return (
      <div className="calender-container">
        <div className="from-calender">
          <WeekDays
            year={this.state.selectedYear}
            month={this.state.selectedMonth}
            setSelectedMonth={this.setSelectedMonth}
            setSelectDate={this.props.setFromDate}
            selectedDate={this.props.fromDate}
            fromDate={this.props.fromDate}
            toDate={this.props.toDate}
          />
        </div>
        <div className="to-calender">
          <WeekDays
            year={this.state.selectedYear}
            month={this.state.selectedMonth + 1}
            setSelectedMonth={this.setSelectedMonth}
            setSelectDate={this.props.setToDate}
            selectedDate={this.props.toDate}
            fromDate={this.props.fromDate}
            toDate={this.props.toDate}
          />
        </div>
      </div>
    );
  }
}

export default DatePicker;
