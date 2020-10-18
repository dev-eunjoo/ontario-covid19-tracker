import React from "react";
import PropTypes from "prop-types";
import "../App.css";

function Report({
  id,
  date,
  cases,
  new_cases,
  fatalities,
  tests,
  hospitalizations,
  criticals,
  recoveries
}) {
  return (
    <tr>
      <td className='date'> {date} </td> <td className='cases'> {cases} </td>{" "}
      <td className='new_cases'> {new_cases} </td>{" "}
      <td className='fatalities'> {fatalities} </td>{" "}
      <td className='tests'> {tests} </td>{" "}
      <td className='hospitalizations'> {hospitalizations} </td>{" "}
      <td className='criticals'> {criticals} </td>{" "}
      <td className='recoveries'> {recoveries} </td>{" "}
    </tr>
  );
}

Report.propTypes = {
  date: PropTypes.string.isRequired,
  cases: PropTypes.number.isRequired,
  fatalities: PropTypes.number.isRequired,
  tests: PropTypes.number.isRequired,
  hospitalizations: PropTypes.number.isRequired,
  criticals: PropTypes.number.isRequired,
  recoveries: PropTypes.number.isRequired
};

export default Report;
