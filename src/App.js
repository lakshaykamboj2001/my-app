import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Create from './components/create';
import Read from './components/read';
import Update from './components/update';
function App() {
  return (
    <>
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Create />} />
            <Route exact path="/read" element={<Read />} />
            <Route exact path="/update" element={<Update />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
