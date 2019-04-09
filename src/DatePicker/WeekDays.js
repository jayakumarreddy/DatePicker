import React, { Component } from "react";
import "./DatePicker.css";

const weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

const months = [
  { key: 0, value: "January" },
  { key: 1, value: "February" },
  { key: 2, value: "March" },
  { key: 3, value: "April" },
  { key: 4, value: "May" },
  { key: 5, value: "June" },
  { key: 6, value: "July" },
  { key: 7, value: "August" },
  { key: 8, value: "Sepetember" },
  { key: 9, value: "October" },
  { key: 10, value: "November" },
  { key: 11, value: "December" }
];

class WeekDays extends Component {
  constructor(props) {
    super(props);
  }

  getWeeklyDates = (month, year) => {
    var firstDate = new Date(year, month, 1);
    var firstDay = firstDate.getDay();
    var weeks = [[]];

    var currentDate = firstDate;
    var currentWeek = weeks[0];

    for (var i = 0; i < firstDay; i++) {
      currentWeek.push(null);
    }
    while (currentDate.getMonth() === month) {
      currentWeek.push(currentDate);
      currentDate = new Date(year, month, currentDate.getDate() + 1);
      if (currentWeek.length === 7) {
        currentWeek = [];
        weeks.push(currentWeek);
      }
    }

    while (currentWeek.length < 7) {
      currentWeek.push(null);
    }

    return weeks;
  };

  getWeekDay = weekDay => {
    return weekDay.substr(0, 2);
  };

  render() {
    return (
      <div>
        <div className="calender-month-row">
          <div>
            {this.props.month && this.props.month >= 1 && (
              <i
                class="arrow left"
                onClick={() =>
                  this.props.setSelectedMonth(this.props.month - 1)
                }
              />
            )}
          </div>
          {months.map(month => {
            if (month.key === this.props.month) {
              return <div>{month.value}</div>;
            }
          })}
          <div>
            {this.props.month && this.props.month <= 10 && (
              <i
                class="arrow right"
                onClick={() =>
                  this.props.setSelectedMonth(this.props.month + 1)
                }
              />
            )}
          </div>
        </div>
        <table className="calender-dates-days-table">
          <thead>
            <tr>
              {weekDays.map(weekDay => {
                return <th key={weekDay}>{this.getWeekDay(weekDay)}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {this.getWeeklyDates(this.props.month, this.props.year).map(
              weeks => {
                return (
                  <tr>
                    {weeks.map(weekDate => {
                      console.log(
                        "check",
                        this.props.fromDate &&
                          this.props.fromDate.getTime() <= weekDate &&
                          weekDate.getTime() <= this.props.toDate &&
                          this.props.toDate.getTime()
                      );
                      return (
                        <td
                          onClick={() =>
                            weekDate !== null &&
                            this.props.setSelectDate(weekDate)
                          }
                          className={
                            this.props.fromDate &&
                            this.props.fromDate.getTime() <= weekDate &&
                            weekDate.getTime() <= this.props.toDate &&
                            this.props.toDate.getTime()
                              ? `calender-date-selected`
                              : ``
                          }
                        >
                          {weekDate ? weekDate.getDate() : ""}
                        </td>
                      );
                    })}
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default WeekDays;
