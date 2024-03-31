const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(bodyParser.json());
app.use(cors());

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "naac_test",
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to mysql  :", err);
    return;
  }
  console.log("Connected to mysql db");
});

app.get("/", (req, res) => {
  res.send("hello there");
});

app.get("/getDepartmentsList", (req, res) => {
  const sql = "SELECT * FROM clg_departments";
  connection.query(sql, (err, result) => {
    if (err) {
      console.error("Error retrieving the college departments: ", err);
      res.status(500).send("Error retrieving the college departments");
    }
    console.log("Data retrived");
    res.status(201).send(result);
  });
});

app.post("/uploadData", (req, res) => {
  const { file_path, filled_desc } = req.body;
  const sql = "INSERT INTO qnm1_1_1 (m_desc, m_files) VALUES(?,?)";
  connection.query(sql, [filled_desc, file_path], (err, result) => {
    if (err) {
      console.error("Error inserting data:", err);
      res.status(500).send("Error inserting data");
    }
    console.log("Data inserted successfully!");
    res.status(201).send("Data inserted successfully");
  });
});

app.post("/checkUserLogin", (req, res) => {
  const { user_email, user_pwd } = req.body;
  const sql =
    "SELECT * FROM faculty_details WHERE faculty_email = ? AND faculty_password = ?";
  connection.query(sql, [user_email, user_pwd], (err, result) => {
    if (err) {
      console.error("Error retriving the data: ", err);
      res.status(500).send("Error retriving the data");
    } else {
      if (result.length != 0) {
        res.json({
          data: result,
        });
      } else {
        res.status(404).send("Data does not exist");
      }
    }
  });
});

app.get("/getFacultyDetails", (req,res)=>{
    const sql = "SELECT faculty_details.*, clg_departments.dept_name FROM faculty_details INNER JOIN clg_departments ON faculty_details.faculty_department_id = clg_departments.dept_id";
    connection.query(sql,(err,result)=>{
        if(err){
            res.json({
                msg: "Cannot get details of faculty"
            }).status(500);
        }else{
            res.json(result);
        }

    })
})

app.post("/createFacultyProfile", (req, res) => {
  // const data = req.body;
  // console.log(data);
  // res.send("Faculty Created");
  const {
    faculty_name,
    faculty_department_id,
    faculty_email,
    faculty_contact,
    faculty_password,

  } = req.body;

  const sql = "INSERT INTO faculty_details (faculty_name, faculty_department_id, faculty_email, faculty_contact, faculty_password) VALUES (?,?,?,?,?)"; 
  connection.query(sql, [faculty_name,faculty_department_id, faculty_email, faculty_contact, faculty_password], (err, result)=>{
    if (err) {
        console.error("Error inserting data:", err);
        res.status(500).send("Error inserting data");
      }
      console.log("Data inserted successfully!");
      res.status(201).json({
        msg: "Faculty Created!!"
      })
    
  })
});

app.listen(8000, () => {
  console.log("Server started !!");
});
