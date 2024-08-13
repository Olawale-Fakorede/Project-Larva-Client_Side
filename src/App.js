
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login';
import Attendance from './components/Attendance/Attendance';

function App() {
  return (
    <BrowserRouter>
      <div className="bg-white w-full h-screen">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Attendance" element={<Attendance />} />
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
