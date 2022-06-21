import { Route, Routes } from "react-router"
import { AddBook } from "../AddBook/AddBook"
import { BooksHome } from "../Book/BooksHome"
import { EditBook } from "../EditBook/EditBook"



export const AllRoutes = ()=>{



    return(
        <Routes>
            <Route path="/" element = {<BooksHome/>}/>
            <Route path="/create" element = {<AddBook/>}/>
            
            <Route path="/edit/:id"  element = {<EditBook/>}/>
        </Routes>
    )
}