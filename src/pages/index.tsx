import React from "react";
import LoginForm from "./components/LoginForm";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";

const Login = () => {
  return (
    <Grid
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      minHeight="80vh"
    >
      <Typography variant="h3" mt={3} alignItems="center">
        Login Page
      </Typography>
      <LoginForm />
    </Grid>
  );
};

export default Login;
