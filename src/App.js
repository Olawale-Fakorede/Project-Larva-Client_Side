
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login';
import Attendance from './components/Attendance/Attendance';
import Register from './components/Register/Register';
import Studentlist from './components/StudentList/Studentlist';
import Settings from './components/settings/Settings';

function App() {
  return (
    <BrowserRouter>
      <div className="bg-white w-full h-full">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/register" element={<Register />} />
          <Route path="/studentlist" element={<Studentlist />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
