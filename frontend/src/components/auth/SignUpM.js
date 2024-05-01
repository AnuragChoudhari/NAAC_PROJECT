import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import axios from "axios";
import "./Auth.css";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import loadingGif from "../assets/Loading_2.gif";

// function Copyright(props) {
//   return (
//     <Typography
//       variant="body2"
//       color="text.secondary"
//       align="center"
//       {...props}
//     >
//       {"Copyright © "}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{" "}
//       {new Date().getFullYear()}
//       {"."}
//     </Typography>
//   );
// }



const defaultTheme = createTheme();

function SignUpM() {
  const [deptDetails, setDeptDetails] = useState([]);
  const [facultyName, setFacultyName] = useState("");
  const [facultyContact, setFacultyContact] = useState("");
  const [facultyEmail, setFacultyEmail] = useState("");
  const [facultyDept, setFacultyDept] = useState("");
  const [facultyPass, setFacultyPass] = useState("");
  const [facultyCpass, setFacultyCpass] = useState("");
  const [passStatus, setPassStatus] = useState("");

  const [loadingStatus, setLoadingStatus] = useState(false);

  const successMsg = () => toast.success("New faculty account created!");
  const errorMsg = () => toast.error("Error creatin new faculty!");

  useEffect(() => {
    const getDepartmentDetails = async () => {
      // Define an async function
      try {
        const response = await axios.get(
          "http://localhost:8000/getDepartmentsList"
        );
        setDeptDetails(response.data); // Assuming the response contains data directly
        console.log("Response is: ", response.data);
      } catch (error) {
        console.log("Error occurred retrieving the department details.", error);
      }
    };

    getDepartmentDetails();
  }, []); // Empty dependency array means this effect runs only once, similar to componentDidMount

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  const facultyData = {
    faculty_name: facultyName,
    faculty_department_id: facultyDept,
    faculty_email: facultyEmail,
    faculty_contact: facultyContact,
    faculty_password: facultyCpass,
  };

  function createFacultyProfile(e) {
    setLoadingStatus(true);

    e.preventDefault();

    setInterval(() => {
      setLoadingStatus(false);
    }, 2000);

    const postFacultyData = axios
      .post("http://localhost:8000/createFacultyProfile", facultyData)
      .then((response) => {
        console.log(response);
        successMsg();
        setTimeout(() => {
          window.location.href = "http://localhost:3000/login";
        }, 2000);
      })
      .catch((error) => {
        console.log("Error in creating faculty :", error);
        errorMsg();
      });
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      
      <Container component="main" maxWidth="xs">
      <ToastContainer />
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={20} sm={12}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="Full Name"
                  autoFocus
                  onChange={(e) => setFacultyName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={(e) => setFacultyEmail(e.target.value)}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="cnum"
                  label="Contact Number"
                  name="cnum"
                  autoComplete="cnum"
                  onChange={(e) => setFacultyContact(e.target.value)}
                  type="number"
                />
              </Grid>

              <Grid item xs={12}>
                <InputLabel id="demo-simple-select-label">Select Department</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={facultyDept}
                  label="Age"
                  onChange={(e) => setFacultyDept(e.target.value)}
                  fullWidth
         
                >
                  {/* <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem> */}
                  {deptDetails.map((dept, index) => {
                  return (
                    <MenuItem key={index} value={dept.dept_id}>{dept.dept_name}</MenuItem>
                  );
                })}
                </Select>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={facultyCpass}
                  onChange={(e) => {
                    setFacultyCpass(e.target.value);
                  }}
                />
              </Grid>
        
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={createFacultyProfile}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 5 }} /> */}
      </Container>
    </ThemeProvider>
  );
}

export default SignUpM;
