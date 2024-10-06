import React from "react";
import axios from "axios";

const RegisterPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/auth/register", {
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