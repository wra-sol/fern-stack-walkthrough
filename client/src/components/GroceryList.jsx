// GroceryList.jsx
import React from 'react';
import {useFetchGroceryItems} from '../hooks/useFetchGroceryItems';
import {
  CircularProgress,
  ListItem,
  ListItemText,
  Typography,
  Grid,
  List,
} from '@mui/material';

const GroceryList = ({token}) => {
  const {data: groceryItems, error, isLoading} = useFetchGroceryItems (token);
  if (isLoading || !groceryItems) {
    return (
      <Grid container py={4}>
        <Grid item xs={12} textAlign={'center'}>
          <CircularProgress />
        </Grid>
      </Grid>
    );
  }
  if (error) {
    return (
      <Grid container py={4}>
        <Grid item xs={12} textAlign={'center'}>
          <Typography variant="h6" color="error">
            Error: {error.message}
          </Typography>
        </Grid>
      </Grid>
    );
  }
  if (groceryItems) return (
    <Grid container>
      <Grid item component={List} container>
        {Object.values (groceryItems).map (item => (
          <Grid item xs={12} component={ListItem} key={item.id}>
            <ListItemText
              primary={item.name}
              secondary={`${item.quantity} ${item.measurement}`}
            />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default GroceryList;
