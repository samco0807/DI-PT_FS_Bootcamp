import React, { useState } from "react";
import axios from "axios";

const RegisterPage:React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setpassword] = useState<string>("");
  const API_URL = "http://localhost:5000/api/auth/register";

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post(API_URL, {
        email,
        password,
      });
      alert("Registration successful");
    } catch (error) {
      console.error("Registration failed", error);
      alert("Registration failed");
    }
  };
};

export default RegisterPage;