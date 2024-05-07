import axios from "axios";

import "./Dashboard.css";

import React, { useEffect, useState } from "react";

function Dashboard() {
  const [userDetails, setUserDetails] = useState([]);
  const [loadingStatus, setLoadingStatus] = useState(false);

  useEffect(() => {
    const currentUserDetails = JSON.parse(localStorage.getItem("fid"));
    const user_email = currentUserDetails.data[0].faculty_email;

    const getFacultySessionInfo = async () => {
      try {
        const response = await axios.post(
          "http://localhost:8000/getFacultySessionDetails",
          { email: user_email }
        );
        setUserDetails(response.data);
        setLoadingStatus(true);
      } catch (error) {
        console.log(error);
      }
    };

    getFacultySessionInfo();
  }, []);

  return (
    <>
      <div className="" id="dashboard-ui">
        <div className="ui secondary vertical menu" id="vertical-menu">
          {/* ------------------------------------------- Criterion 1  start --------------------------------------*/}
          <div className="ui dropdown item">
            <i className="dropdown icon"></i>
            <h4>Criterion 1 - Curricular Aspects</h4>
            <div className="menu">
              <div className="ui dropdown item" id="dropdown-ui">
                <div className="header">
                  Key Indicator - 1.1 Curricular Planning and Implementation
                </div>{" "}
                <i className="dropdown icon"></i>
                <div className="menu">
                  {loadingStatus && userDetails[0]?.qnm1_1_1 ? (
                    <a
                      className="ui item"
                      href="/dashboard/criterion-1/key-indicator-1.1/metric-1.1.1"
                    >
                      Metric No 1.1.1
                    </a>
                  ) : (
                    <a className="ui disabled item">Metric No 1.1.1</a>
                  )}
                </div>
              </div>

              <div className="ui dropdown item" id="dropdown-ui">
                <div className="header">Key Indicator - 1.2 Academic Flexibility</div>{" "}
                <i className="dropdown icon"></i>
                <div className="menu">
                  {loadingStatus && userDetails[0]?.qnm1_2_1 ? (
                    <a className="item" href="/dashboard/criterion-1/key-indicator-1.2/metric-1.2.1">
                      Metric No 1.2.1
                    </a>
                  ) : (
                    <a className="ui disabled item">Metric No 1.2.1</a>
                  )}
                  {loadingStatus && userDetails[0]?.qnm1_2_2 ? (
                    <a className="item" href="/dashboard/criterion-1/key-indicator-1.2/metric-1.2.2">
                      Metric No 1.2.2
                    </a>
                  ) : (
                    <a className="ui disabled item">Metric No 1.2.2</a>
                  )}
                </div>
              </div>

              <div className="ui dropdown item" id="dropdown-ui">
                <div className="header">Key Indicator - 1.3 Curriculum Enrichment</div>{" "}
                <i className="dropdown icon"></i>
                <div className="menu">
                  {loadingStatus && userDetails[0]?.qnm1_3_1 ? (
                    <a className="item" href="/dashboard/criterion-1/key-indicator-1.3/metric-1.3.1">
                      Metric No 1.3.1
                    </a>
                  ) : (
                    <a className="ui disabled item">Metric No 1.3.1</a>
                  )}
                  {loadingStatus && userDetails[0]?.qnm1_3_2 ? (
                    <a className="item" href="/dashboard/criterion-1/key-indicator-1.3/metric-1.3.2">
                      Metric No 1.3.2
                    </a>
                  ) : (
                    <a className="ui disabled item">Metric No 1.3.2</a>
                  )}
                </div>
              </div>

              <div className="ui dropdown item" id="dropdown-ui">
                <div className="header">Key Indicator - 1.4 Feedback System</div>{" "}
                <i className="dropdown icon"></i>
                <div className="menu">
                  {loadingStatus && userDetails[0]?.qnm1_4_1 ? (
                    <a className="item" href="/dashboard/criterion-1/key-indicator-1.4/metric-1.4.1">
                      Metric No 1.4.1
                    </a>
                  ) : (
                    <a className="ui disabled item">Metric No 1.4.1</a>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* ------------------------------------------- Criterion 1  end --------------------------------------*/}

          {/* ------------------------------------------- Criterion 2  start --------------------------------------*/}

          <div className="ui dropdown item">
            <i className="dropdown icon"></i>
            <h4> Criterion 2 - Teaching Learning and Evaluation</h4>
            <div className="menu">
              <div className="ui dropdown item disabled" id="dropdown-ui">
                <div className="header">Key Indicator - 2.1 Student Enrolment and Profile</div>
                <i className="dropdown icon"></i>
                <div className="menu">
                  <a className="ui disabled item">Metric No 2.1.1</a>
                  <a className="ui disabled item">Metric No 2.1.2</a>
                </div>
              </div>

              <div className="ui dropdown item disabled" id="dropdown-ui">
                <div className="header">Key Indicator - 2.2 Student Teacher Ratio</div>
                <i className="dropdown icon"></i>
                <div className="menu">
                  <a className="ui disabled item">Metric No 2.2.1</a>
                </div>
              </div>

              <div className="ui dropdown item" id="dropdown-ui">
                <div className="header">Key Indicator - 2.3 Teacher Learning Process</div>
                <i className="dropdown icon"></i>
                <div className="menu">
                  {loadingStatus && userDetails[0]?.qnm2_3_1 ? (
                    <a className="item" href="/dashboard/criterion-2/key-indicator-2.3/metric-2.3.1">
                      Metric No 2.3.1
                    </a>
                  ) : (
                    <a className="ui disabled item">Metric No 2.3.1</a>
                  )}
                </div>
              </div>

              <div className="ui dropdown item disabled" id="dropdown-ui">
                <div className="header">Key Indicator - 2.4 Teacher Profile and Quality</div>
                <i className="dropdown icon"></i>
                <div className="menu">
                  <a className="ui disabled item">Metric No 2.4.1</a>
                  <a className="ui disabled item">Metric No 2.4.2</a>
                </div>
              </div>

              <div className="ui dropdown item" id="dropdown-ui">
                <div className="header">Key Indicator - 2.5 Evaluation Process and Reforms</div>
                <i className="dropdown icon"></i>
                <div className="menu">
                  {loadingStatus && userDetails[0]?.qnm2_5_1 ? (
                    <a className="item" href="/dashboard/criterion-2/key-indicator-2.5/metric-2.5.1">
                      Metric No 2.5.1
                    </a>
                  ) : (
                    <a className="ui disabled item">Metric No 2.5.1</a>
                  )}
                </div>
              </div>

              <div className="ui dropdown item" id="dropdown-ui">
                <div className="header">Key Indicator - 2.6 Student Performance and Learning Outcome</div>
                <i className="dropdown icon"></i>
                <div className="menu">
                  {loadingStatus && userDetails[0]?.qnm2_6_1 ? (
                    <a className="item" href="/dashboard/criterion-2/key-indicator-2.6/metric-2.6.1">
                      Metric No 2.6.1
                    </a>
                  ) : (
                    <a className="ui disabled item">Metric No 2.6.1</a>
                  )}
                  {loadingStatus && userDetails[0]?.qnm2_6_2 ? (
                    <a className="item" href="/dashboard/criterion-2/key-indicator-2.6/metric-2.6.2">
                      Metric No 2.6.2
                    </a>
                  ) : (
                    <a className="ui disabled item">Metric No 2.6.2</a>
                  )}
                  {loadingStatus && userDetails[0]?.qnm2_6_3 ? (
                    <a className="item" href="/dashboard/criterion-2/key-indicator-2.6/metric-2.6.3">
                      Metric No 2.6.3
                    </a>
                  ) : (
                    <a className="ui disabled item">Metric No 2.6.3</a>
                  )}
                </div>
              </div>

              <div className="ui dropdown item" id="dropdown-ui">
                <div className="header">Key Indicator - 2.7 Student Satisfaction Survey</div>
                <i className="dropdown icon"></i>
                <div className="menu">
                  {loadingStatus && userDetails[0]?.qnm2_7_1 ? (
                    <a className="item" href="/dashboard/criterion-2/key-indicator-2.7/metric-2.7.1">
                      Metric No 2.7.1
                    </a>
                  ) : (
                    <a className="ui disabled item">Metric No 2.7.1</a>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* ------------------------------------------- Criterion 2  end --------------------------------------*/}
        </div>
      </div>
    </>
  );
}

export default Dashboard;
