import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import SimplePage from './Component/SimplePage'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<SimplePage/>} path='/'/>
    </Routes>
    </BrowserRouter>
    );
}

export default App;
