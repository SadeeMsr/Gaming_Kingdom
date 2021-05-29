import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import TopNav from './Components/Nav/TopNav';
import NavLink from './Components/Nav/NavLink'
import NavBody from './Components/Nav/NavBody'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <TopNav></TopNav>
        <NavBody></NavBody>
        <NavLink></NavLink>

      </BrowserRouter>
    </div>
  );
}

export default App;
