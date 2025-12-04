import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MyTickets from "./pages/MyTickets";
import EventDetails from "./pages/EventDetails"
import Dashboard from "./pages/Dashboard"
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import { AuthProvider } from "./context/AuthContext";
import { EventsProvider } from "./context/EventsContext";
import { DashboardProvider } from "./context/DashboardContext";

const App = () => {
  return (
    <AuthProvider>
      <EventsProvider>
        <DashboardProvider>
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
        </DashboardProvider>
      </EventsProvider>
    </AuthProvider>
  );
};

export default App;