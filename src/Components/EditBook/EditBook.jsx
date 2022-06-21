import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import css from "./EditBook.module.css"
import { useDispatch } from 'react-redux';
import { AddBookAPI, UpdateBook } from '../../Redux/Books/action';
import { Navigate, useNavigate, useParams } from 'react-router';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';


export function EditBook() {

   const dispatch = useDispatch()
   const navigate = useNavigate()
   
   const [createData,setCreateData] = React.useState({

    coverPage:"",
    authorName:"",
      name:"",
      price:""
   })


     const {id} = useParams();
     
     console.log(id)
     const {Books} = useSelector((store)=>store.Books)

     useEffect(()=>{
        BookFilter(id)
        },[id])
  
     const BookFilter = (id)=>{

        let book = Books.filter((el)=>el.id==id)
        console.log(book)
        const bookobj= Object.assign({}, book);
        setCreateData(bookobj[0])
        
     }
    
     
  const HandleChange = (e)=>{
      const {id,value} = e.target;
      setCreateData({...createData,[id]:value})
  }
 

const UpadteBookData = ()=>{

      console.log(createData)
   dispatch(UpdateBook(id,createData))
   navigate("/")
}

const cancelUpdateBookHandeler=()=>{
  navigate('/')
}
   
  return (
   <div className={css.addbox}>
        <Box 
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '70ch' ,  },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField value={createData.coverPage} id="outlined-basic" label="Book imageurl" variant="outlined" id="coverPage"  onChange={HandleChange}/> <br />
      <TextField value={createData.authorName} id="outlined-basic" label="Author Name" variant="outlined"  id="authorName"  onChange={HandleChange}/><br />
      <TextField value={createData.name} id="outlined-basic" label="Book Name" variant="outlined" id="name"   onChange={HandleChange}/><br />
      <TextField value={createData.price} id="outlined-basic" label="Price" variant="outlined" id="price"   onChange={HandleChange} /><br />
        
      <Stack spacing={2} direction="row">
  
  <Button  disabled={!createData.coverPage && !createData.authorName && !createData.name && !createData.price} onClick={UpadteBookData} variant="contained">Update Book</Button>
  <Button color="error" onClick={cancelUpdateBookHandeler} variant='outlined' className={css.cancelNewBookBtn}>Cancel</Button>
</Stack>
    </Box>
   </div>
  );
}




    
 