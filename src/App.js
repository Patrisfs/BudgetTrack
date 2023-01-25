import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
import NewProject from './components/pages/NewProject'

import Container from "./components/Layout/Container";


function App() {
  return (
    <Router>

      <div>
        <Link to="/">Home</Link>
        <Link to="/contato">contato</Link>
        <Link to="/newproject">Novo Projeto</Link>
      </div>
      <Container customClass="min-height">
      <Routes>
          <Route path='/' exact='true' element={<Home/>}></Route>
          <Route path='/contato' element={<Contact/>}></Route>
          <Route path='/newproject' element={<NewProject/>}></Route>
      </Routes>
      </Container>
    <p>Footer</p>
    
    </Router>
  );
}

export default App;
