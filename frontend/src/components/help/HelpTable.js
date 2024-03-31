import "./HelpTable.css";

import React from 'react'

function HelpTable(props) {
  return (
    <div className="" id="help-container">
    <div className="" id="help-table-container">
        <h1 className="ui header">{props.criterion}</h1>
        <h3 className="ui header">{props.key_indicator}</h3>
      <table class="ui celled table">
        <thead>
          <tr>
            <th>Metric No.</th>
            <th>Description</th>
            <th>Weightage</th>
          </tr>
        </thead>
        <tbody>
            
          <tr>
            <td data-label="metric">{props.qnm_no}</td>
            <td data-label="desc">
            {props.qnm_desc}
            </td>
            <td data-label="weightage">{props.qnm_weightage}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  )
}

export default HelpTable