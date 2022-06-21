import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useSelector , useDispatch } from 'react-redux';
import css from "./ModalPopup.module.css"
import { DeleteBookData } from '../../Redux/Books/action';
import { useNavigate } from 'react-router';

const style = {
  position: 'absolute',
  top: '50%',
  left: '55%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height:400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 33,
  p: 4,
};


export  function ModalPopup({open , id , HandleClose}) {

  const [singleBook, setSingleBook] = React.useState({})
  
  const dispatch =  useDispatch()
  const navigate = useNavigate()

  const {Books} = useSelector((store)=>store.Books)

   


  React.useEffect(()=>{
        BookFilter(id)
  },[id])
  console.log(id)
     const BookFilter = (id)=>{

        let book = Books.filter((el)=>el.id==id)
        console.log(book)
        const bookobj= Object.assign({}, book);
        setSingleBook(bookobj[0])
        
     }

     const DeleteSingleBook = (id)=>{
         dispatch(DeleteBookData(id))
         HandleClose()
     }
    console.log(singleBook.name)
 
  return (
      
    <div>
      
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        // onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >


        <Fade in={open}>
     
          <Box sx={style}>
                   
                 
                <div id={css.popbox}>

                <img  src={singleBook.coverPage}  height="250px" width="450px" alt="" />
                
                <button style={{cursor:'pointer'}} onClick={HandleClose}>X</button>
                
                </div>
           
                <Typography id="transition-modal-title" variant="h6" component="h2">
                BookName: {singleBook.name}
              </Typography>
              <Typography id="transition-modal-title" variant="h6" component="h2">
                AuthorName: {singleBook.authorName}
              </Typography>
              <Typography id="transition-modal-title" variant="h6" component="h2">
                Price : {singleBook.price}
              </Typography>
             
                  <div className={css.updatediv}>
                      <button onClick={()=>navigate(`/edit/${singleBook.id}`)}>Edit</button>
                      <button onClick={()=>DeleteSingleBook(singleBook.id)}>Delete</button>
                  </div>
          </Box>
    
        </Fade>
            
      </Modal>
    </div>
  );
}
