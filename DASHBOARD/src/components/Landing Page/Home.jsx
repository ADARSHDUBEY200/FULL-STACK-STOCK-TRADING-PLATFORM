import React, { useEffect } from "react";
import Dashboard from "./Dashboard";
import TopBar from "./Topbar";
import { useLocation } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const location = useLocation();
  useEffect(() => {
    const verify = async () => {
      const params = new URLSearchParams(location.search);
      let token = params.get("token");

      console.log("The token come in the differnt domain is : ", token);

      if (!token) {
        token = localStorage.getItem("token");
        if (!token) {
          window.location.href = "http://localhost:5173/signup"
        }
      }

      if (token) {
        localStorage.setItem("token", token);
        window.history.replaceState({}, "", "/");
      }

      const response = await axios.post("http://localhost:3000/", {}, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      const { message, success } = response.data;

      console.log(message);


      if (success) {
        console.log("The user is Logged in");
      } else {
        localStorage.removeItem("token");
        window.location.href = "http://localhost:5173/signup"
      }
    }

    verify();
  }, []);


  return (
    <>
      <TopBar />
      <Dashboard />
    </>
  );
};

export default Home;