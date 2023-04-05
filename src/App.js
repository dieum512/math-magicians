import Quotes from './components/Quotes';
import Calculs from './components/Calculator';
import Home from './components/Home';
import Nav from "./components/Nav";
import { Route, Routes } from 'react-router-dom';

const App = () => (
  <>
    <Nav />
    <div className='all-container'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/calculator' element={<Calculs />} />
        <Route path='/quotes' element={<Quotes />} />
      </Routes>
    </div>
    {/* <Home /> */}
    {/* <Calculs /> */}
    {/* <Quotes /> */}
  </>
);

export default App;
