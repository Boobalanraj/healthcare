import './App.css';
import Home from './component/Home/Home';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Candidate from './component/Candidate/Candidate';
import Contact from './component/Contact/Contact';
import Clients from './component/Clients/Clients';
import Blog from './component/Blog/Blog';
import Whatwedo from './component/Whatwedo/Whatwedo';

const App = () => {
  return (
    <BrowserRouter>
      {/* <Home/> */}

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/candidate' element={<Candidate/>} />
        <Route path='/whatwedo' element={<Whatwedo/>} />
        <Route path='/clients' element={<Clients/>} />
        <Route path='/blog' element={<Blog/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
