import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MyTickets from "./pages/MyTickets";
import EventDetails from "./pages/EventDetails"
import Dashboard from "./pages/Dashboard"
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />


      <main className="flex-1 pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/my-tickets" element={<MyTickets />} ></Route>
          <Route path="/eventdetails/:id" element={<EventDetails />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="*" element={<div className="text-center mt-20 text-xl">Page non trouvée</div>} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;


