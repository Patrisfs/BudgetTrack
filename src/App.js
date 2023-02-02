import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
//Pages
import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
import NewProject from './components/pages/NewProject'
import Projects from './components/pages/Projects'
import Project from "./components/pages/Project"
//Layouts
import Container from "./components/Layout/Container"
import NavBar from "./components/Layout/NavBar"
import Footer from "./components/Layout/Footer"

function App() {
  fetch(process.env.REACT_APP_API_URL || 'http://localhost:8080/api/v1')
  .then(()=> console.log("sucess"))
  .catch(()=> console.log('Err'))
  
  return (
    <Router>
      <NavBar/>
      <Container customClass="min-height">
      <Routes>
          <Route path='/' exact='true' element={<Home/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/newproject' element={<NewProject/>}></Route>
          <Route path='/projects' element={<Projects/>}></Route>
          <Route path='/project/:id' element={<Project/>}></Route>
      </Routes>
      </Container>
      <Footer/>
    </Router>
  );
}

export default App;
