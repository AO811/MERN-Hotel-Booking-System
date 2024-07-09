import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import AddRoom from './components/Rooms/AddRoom';
import RoomList from './components/Rooms/RoomList';
import RoomDetail from './components/Rooms/RoomDetail';
import UpdateRoom from './components/Rooms/UpdateRoom';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/add-room" element={<AddRoom />} />
        <Route path="/rooms" element={<RoomList />} />
        <Route path="/room/:id" element={<RoomDetail />} />
        <Route path="/update-room/:id" element={<UpdateRoom />} />
      </Routes>
    </Router>
  );
}


export default App;
