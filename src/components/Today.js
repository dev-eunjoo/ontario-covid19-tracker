import React from "react";
import PropTypes from "prop-types";
import "../App.css";

function Today({ id, date, today_canada, today_on, new_on, new_canada }) {
  return (
    <div className='today'>
      <div>
        <h1 className='today_title'> {date.slice(0, 10)} </h1>
      </div>
      <div>
        <h1 className='today_title'>
          Today 's <span style={{ color: "white" }}>Ontario</span>
        </h1>
        <h2>
          New cases:
          <span
            style={{
              color: "red"
            }}>
            {new_on}
          </span>
        </h2>
        <h2> Total cases: {today_on} </h2>
      </div>
      <div>
        <h1 className='today_title'>
          Today 's <span style={{ color: "white" }}>Canada</span>
        </h1>
        <h2>
          New cases:
          <span
            style={{
              color: "red"
            }}>
            {new_canada}
          </span>
        </h2>
        <h2> Total cases: {today_canada} </h2>
      </div>
    </div>
  );
}

Today.propTypes = {
  date: PropTypes.string.isRequired,
  today_canada: PropTypes.number.isRequired,
  today_on: PropTypes.number.isRequired,
  new_on: PropTypes.number.isRequired,
  new_canada: PropTypes.number.isRequired
};

export default Today;
