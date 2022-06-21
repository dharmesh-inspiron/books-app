import logo from './logo.svg';
import './App.css';
import { BooksHome } from './Components/Book/BooksHome';
import { Navbar } from './Components/Navbar/Nvabar';
import { AllRoutes } from './Components/AllRoutes/AllRoutes';

function App() {
  return (
    <div className="App">
      <Navbar/>
   <AllRoutes/>
    </div>
  );
}

export default App;
