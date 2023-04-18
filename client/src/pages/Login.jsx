// Login.jsx
import React, { useContext, useState } from "react";
import { Box, Button, Paper } from "@mui/material";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";
import { AuthContext } from "../contexts/AuthProvider";
import { Navigate } from "react-router-dom";

const Login = () => {
  const [showLoginForm, setShowLoginForm] = useState(true);
  const {currentUser} = useContext(AuthContext);
  
  const handleToggleForm = () => {
    setShowLoginForm(!showLoginForm);
  };
  if (currentUser) return <Navigate to={'/dashboard'}/>
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Paper sx={{ p: 4 }}>
        {showLoginForm ? <LoginForm /> : <SignUpForm />}
        <Box mt={2}>
          <Button onClick={handleToggleForm}>
            {showLoginForm
              ? "Don't have an account? Sign up"
              : "Already have an account? Sign in"}
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default Login;
