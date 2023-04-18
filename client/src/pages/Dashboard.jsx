// Dashboard.jsx
import React, {useContext} from 'react';
import {Box, Typography} from '@mui/material';
import GroceryItemInputForm from '../components/GroceryItemInputForm';
import GroceryList from '../components/GroceryList';
import {getAuth} from 'firebase/auth';
import { useQueryClient } from 'react-query';

const Dashboard = () => {
  const {currentUser} = getAuth ();
  const queryClient = useQueryClient()
  const token = currentUser.accessToken;
  return !currentUser
    ? ''
    : <Box display="flex" flexDirection="column" alignItems="center">
        <Typography variant="h3" mb={3}>
          Welcome to the Dashboard!
        </Typography>
        <Typography variant="h5" mb={2}>
          {currentUser ? `Logged in as ${currentUser.email}` : ''}
        </Typography>
        <GroceryItemInputForm token={token} queryClient={queryClient}/>
        <GroceryList token={token} />
      </Box>;
};

export default Dashboard;
