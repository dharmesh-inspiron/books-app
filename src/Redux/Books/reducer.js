import {  GET_BOOK_DATA ,ASC_DATA,DSC_DATA , SEARCH_DATA} from "./action";

const intialState = {
    Books:[]
}

export const BooksReducer = (store=intialState , {type,payload})=>{

    switch(type){
        case GET_BOOK_DATA :
            
      return {...store , Books:[...payload]} 

      case ASC_DATA :
        let recieve_data=store.Books.slice().sort((a,b)=>{

            return a.price-b.price;

        })
        return {...store,Books:[...recieve_data]}

    case DSC_DATA :
        let recieve_dsc_data=store.Books.slice().sort((a,b)=>b.price-a.price);

        return {...store,Books:[...recieve_dsc_data]}
        case SEARCH_DATA :
            return {...store,Books:[...payload]}
        default:
            return store;
    }
}