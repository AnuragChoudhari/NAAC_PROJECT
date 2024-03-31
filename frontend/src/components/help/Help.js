import React from "react";
import Navbar from "../navbar/Navbar";
import "./Help.css";

function Help() {
  return (
    <>
      <Navbar></Navbar>
      <div className="" id="main-help-container">

      <div className="" id="help-container">
        <div className="" id="help-table-container">
          <h1 className="ui header">Criterion 1 - Curricular Aspects (100) </h1>
          <h3 className="ui header" id="key-indicator">
            Key Indicator - 1.1 Curricular Planning and Implementation (100)
          </h3>
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
                <td data-label="metric">1.1.1 QnM</td>
                <td data-label="desc">
                  The institution ensures effective curriculum planning and
                  delivery through a well-planned and documented process
                  including Academic calendar and conduct of continuous internal
                  Assessment.
                </td>
                <td data-label="weightage">20</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Key indicator 1.2 */}

      <div className="" id="help-container">
        <div className="" id="help-table-container">
          <h3 className="ui header" id="key-indicator">
            Key Indicator - 1.2 Academic Flexibility (30)
          </h3>
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
                <td data-label="metric">1.2.1 QnM</td>
                <td data-label="desc">
                  Number of Certificates/Value added courses offered and online
                  courses of MOOCs, SWAYAM, NPTEL etc. where the students of the
                  institution have enrolled and successfully completed during
                  the last five years.
                </td>
                <td data-label="weightage">15</td>
              </tr>

              <tr>
                <td data-label="metric">1.2.2 QnM</td>
                <td data-label="desc">
                  Percentage of students enrolled in Certificate/Value added
                  courses and also completed online courses of MOOCs, SWAYAM,
                  NPTEL, etc. as against the total number of students during the
                  last five years.
                </td>
                <td data-label="weightage">15</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>


      {/* Key indicator 1.3 */}

      <div className="" id="help-container">
        <div className="" id="help-table-container">
          <h3 className="ui header" id="key-indicator">
            Key Indicator - 1.3 Curriculum Enrichment (30)
          </h3>
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
                <td data-label="metric">1.3.1 QnM</td>
                <td data-label="desc">
                Institution integrates crosscutting issues relevant to Professional Ethics, Gender,
            Human Values, Environment and Sustainability in transacting the Curriculum.
                </td>
                <td data-label="weightage">10</td>
              </tr>

              <tr>
                <td data-label="metric">1.3.2 QnM</td>
                <td data-label="desc">
                Percentage of students undertaking project work/field
            work/ internships (Data for the latest completed academic year)
                </td>
                <td data-label="weightage">20</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>


      </div>
    </>
  );
}

export default Help;
