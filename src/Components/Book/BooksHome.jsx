import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetBookData, GetBookDataAPI } from "../../Redux/Books/action";
import { PriceFilter } from "../PriceFilter/PriceFilter";
import css from "./BooksHome.module.css";
import { ModalPopup } from "./ModalPopup";

export const BooksHome = () => {
  
  const dispatch = useDispatch();
  const [BooksData,setBooksData] = useState([])
  const [open, setOpen] = useState(false);
  const [id,setId] = useState(0)
  
  useEffect(() => {
    dispatch(GetBookDataAPI());
   
  }, []);

  const SetData = (data)=>{
    setBooksData([...data])
  }
   

    const HandleClose = ()=>{
        setOpen(false)
    }

  const HandleChange = (val)=>{
      setOpen(true)
      setId(val)
  }
  
   
  
  const { Books } = useSelector((store) => store.Books);
  
  
  
    

      
       

  return (
    <>
      <div className={css.container}>
        <div className={css.filter}>
        <PriceFilter />
        </div>
         
        <div className={css.booksdiv}>
          {Books.map((book) => (
           <div key={book.id} onClick={()=>HandleChange(book.id)}> <img src={book.coverPage} alt="" />
                  <p><strong> {book.name}</strong></p>
                  <p>Price : <span>Rs. {book.price}</span></p>
           </div> 
          ))}
             {open && (
                 <ModalPopup open = {open} id={id}  HandleClose={HandleClose} />
                )}
        </div>
      </div>
        
    </>
  );
};
