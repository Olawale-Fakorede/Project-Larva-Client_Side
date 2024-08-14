
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login';
import Attendance from './components/Attendance/Attendance';
import Register from './components/Register/Register';

function App() {
  return (
    <BrowserRouter>
      <div className="bg-white w-full h-screen">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
