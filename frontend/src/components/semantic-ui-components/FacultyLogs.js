import React, { useEffect, useState } from "react";
import "./FacultyLogs.css";
import { Person, StarBorder } from "@mui/icons-material";
import axios from "axios";

function FacultyLogs() {
  const [logs, setLogs] = useState([]);

  const getLogs = async () => {
    const api_data = await axios.post("http://localhost:8000/api/get-logs");
    const actual_data = api_data.data;
    setLogs(actual_data);
  };

  useEffect(() => {
    getLogs();
    console.log(logs);
  }, []);

  return (
    <>
      {logs.map((content, i) => {
        return (
          <>
            <div class="ui comments">
              <div class="comment">
                <a class="avatar">
                  <Person></Person>
                </a>
                <div class="content">
                  <a class="author">{content.faculty_name}</a>
                  <div class="metadata" id="log-date">
                    <div class="date" >{content.change_time}</div>
                  </div>
                  <div class="text">
                  {content.activity_desc}
                  </div>
                </div>
              </div>
            </div>
            <div className="ui divider"></div>
          </>
        );
      })}
    </>
  );
}

export default FacultyLogs;
