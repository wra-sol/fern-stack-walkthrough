//GroceryItemInputForm.jsx
import React, {useState, useContext} from 'react';
import {useAddGroceryItem} from '../hooks/useAddGroceryItem';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

const commonMeasurements = [
  'piece',
  'fluid ounce',
  'cup',
  'pint',
  'quart',
  'gallon',
  'milliliter',
  'liter',
  'ounce',
  'pound',
  'gram',
  'kilogram',
  'count',
];

const GroceryItemInputForm = ({token, queryClient}) => {

  const [name, setName] = useState ('');
  const [quantity, setQuantity] = useState ('');
  const [measurement, setMeasurement] = useState ('count');
  const addGroceryItemMutation = useAddGroceryItem(token, queryClient);
  const handleSubmit = e => {
    e.preventDefault ();
    const newItem = {name, quantity, measurement, id: Date.now ()};
    addGroceryItemMutation.mutate (newItem, {
      onSuccess: () => {
        setName ('');
        setQuantity ('');
        setMeasurement ('');
      },
    });
  };

  return (
    <Grid
      component="form"
      onSubmit={handleSubmit}
      noValidate
      autoComplete="off"
      container
      justifyContent={'space-between'}
      rowGap={1}
    >
      <Grid
        item
        component={TextField}
        label="Item Name"
        value={name}
        onChange={e => setName (e.target.value)}
        xs={8}
        sm={4}
        fullWidth
      />
      <Grid
        item
        component={TextField}
        label="Quantity"
        value={quantity}
        onChange={e => setQuantity (e.target.value)}
        fullWidth
        xs={3}
        sm={2}
      />
      <Grid
        item
        component={TextField}
        select
        label="Measurement"
        value={measurement}
        onChange={e => setMeasurement (e.target.value)}
        sm={3}
        xs={8}
        fullWidth
      >
        {commonMeasurements.map (unit => (
          <MenuItem key={unit} value={unit}>
            {unit}{quantity > 1 ? 's' : ''}
          </MenuItem>
        ))}
      </Grid>
      <Grid
        component={Button}
        type="submit"
        variant="contained"
        color="primary"
        item
        xs={3}
        sm={2}
      >
        Add
      </Grid>
    </Grid>
  );
};
export default GroceryItemInputForm;
