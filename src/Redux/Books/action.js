import axios from "axios"

export const GET_BOOK_DATA = "GET_BOOK_DATA";
export const ADD_BOOK = "ADD_BOOK"
export const ASC_DATA="ASC_DATA";
export const DSC_DATA="DSC_DATA";
export const SEARCH_DATA="SEARCH_DATA";


export const GetBookData  = (payload)=>({
    type:GET_BOOK_DATA,
    payload
})

export const AddBook = ()=>(
    {
        type:ADD_BOOK
    }
)
export const asc_data=(payload)=>{

        return(
    
           {
    
            type:ASC_DATA,
    
            payload
    
           }
    
        )
    
    };

    export const dsc_data=(payload)=>{

            return(
        
               {
        
                type:DSC_DATA,
        
                payload
        
               }
        
            )
        
        };



        export const search_data=(payload)=>{

                return(
            
                   {
            
                    type:SEARCH_DATA,
            
                    payload
            
                   }
            
                )
            
            };


export const GetBookDataAPI = ()=>(dispatch)=>{

    axios.get("https://62a89ad6943591102ba66ccd.mockapi.io/api/v1/books").then((res)=>dispatch(GetBookData(res.data))).catch((error)=>console.log(error))
}
export const AddBookAPI = (data)=>(dispatch)=>{

    axios.post("https://62a89ad6943591102ba66ccd.mockapi.io/api/v1/books",data).then(()=>dispatch(GetBookDataAPI()))
 
 }
 export const UpdateBook = (id,data)=>(dispatch)=>{
  
    axios.put(`https://62a89ad6943591102ba66ccd.mockapi.io/api/v1/books/${id}`,data).then(()=>dispatch(GetBookDataAPI()))
 }

export const DeleteBookData = (id)=>(dispatch)=>{
    axios.delete(`https://62a89ad6943591102ba66ccd.mockapi.io/api/v1/books/${id}`).then(()=>dispatch(GetBookDataAPI()))
}


export const filter_book_data=(payload)=>(dispatch)=>{

        axios.get("https://62a89ad6943591102ba66ccd.mockapi.io/api/v1/books").then(({data})=>{
    
            let searchData=data.slice().filter((element)=>{
    
                return element.authorName.toLowerCase().indexOf(payload.toLowerCase())>=0 || element.name.toLowerCase().indexOf(payload.toLowerCase())>=0; 
    
            });
    
            dispatch(search_data(searchData));
    
        });
    
    };