import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Homepage } from './pages';
import {Mytask} from './pages';
import {Create} from './pages'
import {Error} from './pages'
import {Update} from './pages'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/all" element={<Mytask />} />
          <Route path="/create" element={<Create />} />
          <Route path="/update/:taskId" element={<Update />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </>
  );
}

export default App
