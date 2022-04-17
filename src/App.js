import logo from './logo.svg';
import './App.css';
import Navbar from "./Navbars/Navbar"


function App() {
  return (
    <div className="App">
     <BrowserRouter >
        <NavLink
          to={"/"}
          className={({isActive}) => (isActive ? "link active" : "link")}
        >
          Home
        </NavLink>

        <NavLink
          className={({isActive}) => (isActive ? "link active" : "link")}
          to={"/about"}
        >
          About
        </NavLink>
     

        <Routes>
          <Route exact path="/" index={0} element={<Homme />} />
          <Route exact path="/about" index={1} element={<About />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
