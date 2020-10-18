import React from "react";
import PropTypes from "prop-types";
import "../App.css";

function Report({
  id,
  date,
  canada,
  nl,
  pe,
  ns,
  nb,
  qc,
  on,
  mb,
  sk,
  ab,
  bc,
  yt,
  nt,
  nu
}) {
  return (
    <tr>
      <td className='date'> {date.slice(0, 10)} </td>
      <td className='canada'> {canada} </td>
      <td className='on'> {on} </td>
      <td className='nl'> {nl} </td>
      <td className='pe'> {pe} </td>
      <td className='ns'> {ns} </td>
      <td className='nb'> {nb} </td>
      <td className='qc'> {qc} </td>
      <td className='mb'> {mb} </td>
      <td className='sk'> {sk} </td>
      <td className='ab'> {ab} </td>
      <td className='bc'> {bc} </td>
      <td className='yt'> {yt} </td>
      <td className='nt'> {nt} </td>
      <td className='nu'> {nu} </td>
    </tr>
  );
}

Report.propTypes = {
  date: PropTypes.string.isRequired,
  canada: PropTypes.number.isRequired,
  nl: PropTypes.number.isRequired,
  pe: PropTypes.number.isRequired,
  ns: PropTypes.number.isRequired,
  nb: PropTypes.number.isRequired,
  qc: PropTypes.number.isRequired,
  on: PropTypes.number.isRequired,
  mb: PropTypes.number.isRequired,
  sk: PropTypes.number.isRequired,
  ab: PropTypes.number.isRequired,
  bc: PropTypes.number.isRequired,
  yt: PropTypes.number.isRequired,
  nt: PropTypes.number.isRequired,
  nu: PropTypes.number.isRequired
};

export default Report;
