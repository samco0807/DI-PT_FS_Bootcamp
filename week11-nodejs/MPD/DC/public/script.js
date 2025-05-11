// root/public/script.js
document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  const registerForm = document.getElementById("registerForm");
  const errorMessageDiv = document.getElementById("errorMessage");
  const successMessageDiv = document.getElementById("successMessage");
  const API_URL = "http://localhost:3000/api/users";

  // Manage login form
  if (loginForm) {
    loginForm.addEventListener("submit", async (event) => {
      event.preventDefault();

      const usernameInput = document.getElementById("username");
      const passwordInput = document.getElementById("password");

      const username = usernameInput.value.trim();
      const password = passwordInput.value.trim();

      if (!username || !password) {
        showError("Please fill all fields");
        return;
      }

      try {
        const response = await axios.post(`${API_URL}/login`, {
          username: username,
          password: password,
        });
        const result = response.data;

        alert("Login successful! Welcome", result.username);
        loginForm.reset();
      } catch (error) {
        console.error("Login error", error);
        showError("An error occured during login. Please try again");
      }
    });
  }

  if (registerForm) {
    registerForm.addEventListener("submit", async (event) => {
      event.preventDefault();
      const firnameInput = document.getElementById("firstname");
      const lastnameInput = document.getElementById("lastname");
      const emailInput = document.getElementById("email");
      const usernameInput = document.getElementById("username");
      const passwordInput = document.getElementById("password");

      const firstname = firnameInput.value.trim();
      const lastname = lastnameInput.value.trim();
      const email = emailInput.value.trim();
      const username = usernameInput.value.trim();
      const password = passwordInput.value.trim();

      if (!firstname || !lastname || !email || !username || !password) {
        showError("Please fill all the fields");
      }
      try {
        const response = await axios.post(`${API_URL}/register`, {
          firstname: firstname,
          lastname: lastname,
          email: email,
          username: username,
          password: password,
        });
        const result = response.data;
        console.log(result)
        if (response.status === 201) {
          showSuccess("Registration successful! You can log in");
          registerForm.reset();
        } else {
          showError(result.message || "Registration failed. Please try again");
        }
      } catch (error) {
        console.error("Registration error");
        showError("An error occurred during registration. Please try again");
      }
    });
  }

  const showError = (message) => {
    if (errorMessageDiv) {
      errorMessageDiv.textContent = message;
    } else {
      alert(message);
    }
    if (successMessageDiv) successMessageDiv.classList.add("d-none");
  };

  const showSuccess = (message) => {
    if (successMessageDiv) {
      successMessageDiv.textContent = message;
    } else {
      alert(message);
    }
    if (errorMessageDiv) errorMessageDiv.classList.add("d-none");
  };
});
