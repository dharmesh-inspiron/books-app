import { applyMiddleware, combineReducers, createStore } from "redux";
import { BooksReducer } from "./Books/reducer";
import thunk from 'redux-thunk'


const RootReducer = combineReducers({
     Books:BooksReducer
})


export const store = createStore(RootReducer,applyMiddleware(thunk))