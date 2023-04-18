// SignUpForm.jsx
import React, {useState} from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import {useNavigate} from 'react-router-dom';
import {TextField, Button, Typography} from '@mui/material';

const SignUpForm = () => {
  const [email, setEmail] = useState ('');
  const [password, setPassword] = useState ('');
  const auth = getAuth();

  const navigate = useNavigate ();

  const handleSignUp = async e => {
    e.preventDefault ();
    try {
      await createUserWithEmailAndPassword (auth, email, password);
      navigate ('/dashboard');
    } catch (error) {
      console.error ('Error signing up', error);
    }
  };

  return (
    <form onSubmit={handleSignUp}>
      <Typography variant="h5">Sign Up</Typography>
      <TextField
        type="email"
        label="Email"
        variant="outlined"
        value={email}
        onChange={e => setEmail (e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        type="password"
        label="Password"
        variant="outlined"
        value={password}
        onChange={e => setPassword (e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Sign Up
      </Button>
    </form>
  );
};

export default SignUpForm;
