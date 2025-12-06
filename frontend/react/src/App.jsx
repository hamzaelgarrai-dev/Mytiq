import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MyTickets from "./pages/MyTickets";
import EventDetails from "./pages/EventDetails";
import Dashboard from "./pages/Dashboard";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import { AuthProvider } from "./context/AuthContext";
import { EventsProvider } from "./context/EventsContext";
import { DashboardProvider } from "./context/DashboardContext";

import ProtectedRoute from "./components/ProtectedRoute"; 
// 👍 We use your existing protected component


const App = () => {
  return (
    <AuthProvider>
      <EventsProvider>
        <DashboardProvider>
          <div className="flex flex-col min-h-screen">

            <Navbar />

            <main className="flex-1 pt-20">
              <Routes>

                {/* Public */}
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/eventdetails/:id" element={<EventDetails />} />

                {/* Protected (any logged user) */}
                <Route
                  path="/my-tickets"
                  element={
                    <ProtectedRoute allowedRoles={["user"]}>
                      <MyTickets />
                    </ProtectedRoute>
                  }
                />

                {/* Admin-only */}
                <Route
                  path="/dashboard"
                  element={
                    <ProtectedRoute allowedRoles={["admin"]}>
                      <Dashboard />
                    </ProtectedRoute>
                  }
                />

                {/* 404 */}
                <Route
                  path="*"
                  element={
                    <div className="text-center mt-20 text-xl">
                      Page non trouvée
                    </div>
                  }
                />

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
