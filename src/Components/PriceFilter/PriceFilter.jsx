import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useDispatch, useSelector } from 'react-redux';
import { asc_data, dsc_data } from '../../Redux/Books/action';
import css from './PriceFilter.module.css'
export function PriceFilter({setData}) {
  const [price, setPrice] = React.useState('');
  
   const dispatch = useDispatch()

     const { Books }  = useSelector((store)=>store.Books)

 

  const handleChange = (event) => {
    setPrice(event.target.value);
       
    if(price=="high"){
       dispatch(asc_data())
    }
    else if(price=="low"){
     dispatch(dsc_data())
    }

  };

       

  return (
    <Box >
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Price</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={price}
          label="price"
          onChange={handleChange}
        >
          <MenuItem value="high">HIGH TO LOW</MenuItem>
          <MenuItem value="low">LOW TO High</MenuItem>
         
        </Select>
      </FormControl>
    </Box>
  );
}
