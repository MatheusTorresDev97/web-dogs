import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Home from "../components/Home";
import Login from "../components/Login";
import User from "../components/User";
import { UserStorage } from "../UserContext";
import ProtectedRoute from "../components/Helper/ProtectedRoute";
import Photo from "../components/Photo";
import NotFound from "../components/NotFound";
import UserProfile from "../components/User/UserProfile";

const RoutesApp = () => {
  return (
    <div className="App">
    <BrowserRouter>
      <UserStorage>
        <Header />
        <main className="AppBody">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login/*" element={<Login />} />
          <Route
            path="conta/*"
            element={
              <ProtectedRoute>
                <User />
              </ProtectedRoute>
            }
          />
          <Route path="foto/:id" element={<Photo />} />
          <Route path="perfil/:id" element={<UserProfile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        </main>
        <Footer />
      </UserStorage>
    </BrowserRouter>
    </div>
  );
};

export default RoutesApp;
