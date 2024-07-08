import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Home from './components/Home';
import AddRoom from './components/Rooms/AddRoom';
import RoomList from './components/Rooms/RoomList';
import RoomDetail from './components/Rooms/RoomDetail';
import UpdateRoom from './components/Rooms/UpdateRoom';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/add-room" element={<AddRoom />} />
        <Route path="/rooms" element={<RoomList />} />
        <Route path="/room/:id" element={<RoomDetail />} />
        <Route path="/update-room/:id" element={<UpdateRoom />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
