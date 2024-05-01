const bodyParser = require("body-parser");
const express = require("express");
const fs = require('fs');
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function(req,file,cb){
    const facultyId = req.body.faculty_id;
    // Define the destination folder path with the faculty ID
    const destinationPath = `./uploads/${facultyId}`;
    // Create the folder if it doesn't exist
    fs.mkdirSync(destinationPath, { recursive: true });
    // Set the destination folder
    cb(null, destinationPath);
  },
  filename: function(req,file,cb){
    return cb(null, `${file.originalname}`);
  }
})

const upload = multer({storage: storage});

app.use(bodyParser.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());


// app.post("/uploadData", upload.array("file_path"), (req, res) => {
//   const { file_path, filled_desc, faculty_id } = req.body;
//   // const sql = "INSERT INTO qnm1_1_1 (m_desc, m_files, faculty_id) VALUES(?,?,?)";
//   // connection.query(sql, [filled_desc, file_path, faculty_id], (err, result) => {
//   //   if (err) {
//   //     console.error("Error inserting data:", err);
//   //     res.status(500).send("Error inserting data");
//   //   }
//   //   console.log("Data inserted successfully!");
//   //   res.status (201).send("Data inserted successfully");
//   // });
//   console.log(req.body);
//   res.json(req.body);
// });

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


app.post("/uploadData/qnm1_1_1", upload.array("files"), (req, res) => {
     const {faculty_id, m_desc, m_files} = req.body;

     const sql = 'INSERT INTO qnm1_1_1 (m_desc, m_files, faculty_id) VALUES (?,?,?)';
     connection.query(sql, [m_desc, m_files, faculty_id], (err, result) => {
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

app.post("/getUploadDetails/${id}", (req,res)=>{
  
})


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

app.get("/getFacultyFilledDetails",(req,res)=>{
  
})

//  Get all users 

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

// Filter api

// app.get("/getFacultyDetails/filter/:filterId", (req,res)=>{
//           const sql  = "SELECT faculty_details.*"
// })


app.post("/getFacultySessionDetails", (req,res)=>{
  const {email} = req.body;
  const sql = "SELECT faculty_details.*, clg_departments.dept_name FROM faculty_details INNER JOIN clg_departments ON faculty_details.faculty_department_id = clg_departments.dept_id  WHERE faculty_email= ?";
  connection.query(sql,[email],(err,result)=>{
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


app.post("/setFacultyCriterias", async (req,res)=>{
  // const data = req.body;
  // console.log(JSON.stringify(data,null, 2));
  // res.send(data);

  try {
    const data = req.body;

    // Iterate over the faculty data received from the frontend
    for (const faculty of data) {
      const facultyId = faculty.faculty_id;
      const checkboxes = faculty.checkboxes;

      // Construct the SQL update query
      const updateQuery = `
        UPDATE faculty_details
        SET qnm1_1_1 = ?, qnm1_2_1 = ?, qnm1_2_2 = ?, qnm1_3_1 = ?, qnm1_3_2 = ?, qnm1_4_1 = ?
        WHERE faculty_id = ?
      `;
      
    

      // Extract the checkbox values from the checkboxes array
      const values = checkboxes.map(checkbox => checkbox.checked);

      // Add the faculty ID to the end of the values array
      values.push(facultyId);

      // Execute the query with the appropriate parameters
      await connection.query(updateQuery, values);

   
      // await connection.query(insertQuery,[faculty.checkboxes,facultyId]);
    }

    res.status(200).send("Data updated successfully");
  } catch (error) {
    console.error("Error updating data:", error);
    res.status(500).send("Error updating data");
  }

})


app.listen(8000, () => {
  console.log("Server started !!");
});
