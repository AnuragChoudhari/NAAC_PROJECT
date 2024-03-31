import Navbar from "../navbar/Navbar";
import "./Dashboard.css";

import React from "react";

function Dashboard() {
  return (
    <>
    
      <div className="" id="dashboard-ui">
        <div class="ui secondary vertical menu" id="vertical-menu">
          {/* ------------------------------------------- Criterion 1  start --------------------------------------*/}
          <div class="ui dropdown item">
            <i class="dropdown icon"></i>
            <h4>Criterion 1 - Curricular Aspects</h4>
            <div class="menu">
              <div class="ui dropdown item" id="dropdown-ui">
                <div className="header">
                  Key Indicator - 1.1 Curricular Planning and Implementation
                </div>{" "}
                <i class="dropdown icon"></i>
                <div class="menu">
                  <a class="item" href="/dashboard/criterion-1/key-indicator-1.1/metric-1.1.1">Metric No 1.1.1</a>
                </div>
              </div>

              <div class="ui dropdown item" id="dropdown-ui">
                <div className="header">
                  Key Indicator - 1.2 Academic Flexibility{" "}
                </div>{" "}
                <i class="dropdown icon"></i>
                <div class="menu">
                  <a class="item" href="/dashboard/criterion-1/key-indicator-1.2/metric-1.2.1">Metric No 1.2.1</a>
                  <a class="item" href="/dashboard/criterion-1/key-indicator-1.2/metric-1.2.2">Metric No 1.2.2</a>
                </div>
              </div>

              <div class="ui dropdown item" id="dropdown-ui">
                <div className="header">
                  Key Indicator - 1.3 Curriculum Enrichment{" "}
                </div>{" "}
                <i class="dropdown icon"></i>
                <div class="menu">
                  <a class="item" href="/dashboard/criterion-1/key-indicator-1.3/metric-1.3.1">Metric No 1.3.1</a>
                  <a class="item" href="/dashboard/criterion-1/key-indicator-1.3/metric-1.3.2">Metric No 1.3.2</a>
                </div>
              </div>

              <div class="ui dropdown item" id="dropdown-ui">
                <div className="header">
                  Key Indicator - 1.4 Feedback System{" "}
                </div>{" "}
                <i class="dropdown icon"></i>
                <div class="menu">
                  <a class="item" href="/dashboard/criterion-1/key-indicator-1.4/metric-1.4.1">Metric No 1.4.1</a>
                </div>
              </div>
            </div>
          </div>

          {/* ------------------------------------------- Criterion 1  end --------------------------------------*/}

          {/* ------------------------------------------- Criterion 2  start --------------------------------------*/}

          <div class="ui dropdown item">
            <i class="dropdown icon"></i>
            <h4>   Criterion 2 - Teaching Learning and Evaluation</h4>
            <div class="menu">

              <div class="ui dropdown item disabled" id="dropdown-ui">
                <div className="header">
                  Key Indicator - 2.1 Student Enrolment and Profile 
                </div>
                <i class="dropdown icon"></i>
                <div class="menu">
                  <a class="item">Metric No 2.1.1</a>
                  <a class="item">Metric No 2.1.2</a>
                </div>
              </div>

              
              <div class="ui dropdown item disabled" id="dropdown-ui">
                <div className="header">
                  Key Indicator - 2.2 Student Teacher Ratio  
                </div>
                <i class="dropdown icon"></i>
                <div class="menu">
                  <a class="item">Metric No 2.2.1</a>
                </div>
              </div>

              <div class="ui dropdown item" id="dropdown-ui">
                <div className="header">
                  Key Indicator - 2.3 Teacher Learning Process  
                </div>
                <i class="dropdown icon"></i>
                <div class="menu">
                  <a class="item" href="/dashboard/criterion-2/key-indicator-2.3/metric-2.3.1">Metric No 2.3.1</a>
                </div>
              </div>

              <div class="ui dropdown item disabled" id="dropdown-ui">
                <div className="header">
                  Key Indicator - 2.4 Teacher Profile and Quality  
                </div>
                <i class="dropdown icon"></i>
                <div class="menu">
                  <a class="item">Metric No 2.4.1</a>
                  <a class="item">Metric No 2.4.2</a>
                </div>
              </div>

              <div class="ui dropdown item" id="dropdown-ui">
                <div className="header">
                  Key Indicator - 2.5 Evaluation Process and Reforms  
                </div>
                <i class="dropdown icon"></i>
                <div class="menu">
                  <a class="item" href="/dashboard/criterion-2/key-indicator-2.5/metric-2.5.1">Metric No 2.5.1</a>
                </div>
              </div>

              <div class="ui dropdown item" id="dropdown-ui">
                <div className="header">
                  Key Indicator - 2.6 Student Performance and Learning Outcome  
                </div>
                <i class="dropdown icon"></i>
                <div class="menu">
                  <a class="item"  href="/dashboard/criterion-2/key-indicator-2.6/metric-2.6.1">Metric No 2.6.1</a>
                  <a class="item"  href="/dashboard/criterion-2/key-indicator-2.6/metric-2.6.2">Metric No 2.6.2</a>
                  <a class="item"  href="/dashboard/criterion-2/key-indicator-2.6/metric-2.6.3">Metric No 2.6.3</a>
                </div>
              </div>

              <div class="ui dropdown item" id="dropdown-ui">
                <div className="header">
                  Key Indicator - 2.7 Student Satisfaction Survey 
                </div>
                <i class="dropdown icon"></i>
                <div class="menu">
                  <a class="item">Metric No 2.7.1</a>
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
