import React, { useState } from "react";
import "../css/landing.css";
import hero from "../images/hero.jpg";
import arrow from "../images/rightArrow.png";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import HeaderLanding from "../components/headerLanding";
import Footer from "../components/footer";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "../css/login.css";
import Form from "../components/form";

function Landing() {
  const [formChoice, setFormChoice] = useState("default");

  const navigate = useNavigate();
  const location = useLocation();

  function handleFormChoice(e) {
    setFormChoice(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault(); /*
    fetch("http://127.0.0.1:4000/users/me", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: location.state.token,
      },
      body: JSON.stringify({
        firstName,
        lastName,
        organization,
      }),
    })
      .then((res) => console.log(res))
      .then(() => {
        navigate(
          "../signup/primary-use",
          {
            state: {
              email: location.state.email,
              firstName,
              lastName,
              token: location.state.token,
            },
          },
          { replace: true }
        );
      })
      .catch((error) => {});*/
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <HeaderLanding />
      <div className="heroWrapper">
        <div id="heroText">
          <motion.h1
            className="everythingText"
            initial={{ opacity: 0, x: 0 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            FILL OUT YOUR VISIT FORMS
          </motion.h1>
          <select
            defaultValue="default"
            onChange={(e) => handleFormChoice(e)}
            className="defaultSelect"
          >
            <option value="default">Choose a form to fill out</option>
            <option value="formulaAndFood">
              Medical Documentation for Formula and Food
            </option>
            <option value="naplesEquestrianChallenge">
              Naples Therapeutic Riding Center equine therapeutic riding program
            </option>
          </select>
          <Form formChoice={formChoice} />
        </div>
      </div>
    </motion.div>
  );
}

export default Landing;
