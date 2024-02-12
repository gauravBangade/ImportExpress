import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage.js';
import About from './pages/About';
import Contact from './pages/Contact';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <>
     <Routes>
      <Route path='/' element=<Homepage/> />
      <Route path='/About' element=<About/> />
      <Route path='/Contact' element=<Contact/> />
      <Route path='*' element=<PageNotFound/> />

     </Routes>
    </>
  );
}

export default App;
