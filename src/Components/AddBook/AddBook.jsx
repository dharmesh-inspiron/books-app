import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import css from "./AddBook.module.css"
import { useDispatch } from 'react-redux';
import { AddBookAPI } from '../../Redux/Books/action';
import { Navigate, useNavigate } from 'react-router';






export function AddBook() {

   const dispatch = useDispatch()
   const navigate = useNavigate()
   const [createData,setCreateData] = React.useState({

    coverPage:"",
    authorName:"",
      name:"",
      price:""
   })

  const HandleChange = (e)=>{
      const {id,value} = e.target;
      setCreateData({...createData,[id]:value})
  }
 

const HandleSubmit = ()=>{

   dispatch(AddBookAPI(createData));
   navigate("/")
}

const CancelAddNewBookHandeler=()=>{
  navigate('/')
}
   
  return (
   <div className={css.addbox}>

       <h1>Add Book</h1>
        <Box 
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '70ch' ,  },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Book imageurl" variant="outlined" id="coverPage"  onChange={HandleChange}/> <br />
      <TextField id="outlined-basic" label="Author Name" variant="outlined"  id="authorName"  onChange={HandleChange}/><br />
      <TextField id="outlined-basic" label="Book Name" variant="outlined" id="name"   onChange={HandleChange}/><br />
      <TextField id="outlined-basic" label="Price" variant="outlined" id="price" type={'Number'}   onChange={HandleChange} /><br />
        
      <Stack spacing={2} direction="row">
  
  <Button className={css.addNewBookBtn} disabled={!createData.coverPage || !createData.authorName || !createData.name || !createData.price} onClick={HandleSubmit} variant="contained">Add Book</Button>
  <Button color="error" onClick={CancelAddNewBookHandeler} variant='outlined' className={css.cancelNewBookBtn}>Cancel</Button>
</Stack>
    </Box>
   </div>
  );
}




    
 