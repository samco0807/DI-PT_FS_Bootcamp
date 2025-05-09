Okay, je comprends. Tu veux construire une application web simple avec un frontend (HTML + JS) et un backend (Node/Express) pour gérer l'enregistrement et la connexion d'utilisateurs, en stockant les données dans un fichier users.json.

Ton code actuel contient plusieurs erreurs et incohérences, notamment :

Frontend JavaScript (script.js) : Il essaie d'importer des modules Node.js (bcrypt, users.json) et d'accéder au système de fichiers, ce qui est impossible depuis un navigateur. La logique de validation doit se faire via des appels API au backend.

Backend Controller (usersController.js) : Les fonctions de lecture/écriture (readUsers, writeUsers) sont incorrectes, la logique de loginUser, registerUser, getRegisteredUserbyId est erronée ou incomplète, et il contient du code frontend (DOM manipulation) qui n'a rien à y faire.

users.json : La structure avec la clé "users" est incorrecte. Le fichier doit être un tableau [] à la racine.

package.json : Contient des dépendances inutiles (knex, pg, body-parser) et il manque bcryptjs (ou bcrypt) qui est essentiel pour la sécurité des mots de passe (même si on ne l'implémente pas complètement ici, c'est crucial).

HTML (register.html) : Manque les id sur les inputs pour que le JS puisse les cibler facilement et n'inclut pas de fichier JavaScript.

Reprenons tout ça et corrigeons-le.

Étape 1 : Corriger users.json

Assure-toi que ton fichier data/users.json contient simplement un tableau vide au début :

// data/users.json
[]


Étape 2 : Corriger package.json

Nettoie les dépendances et ajoute bcryptjs.

// package.json
{
  "name": "user-auth-exercise", // Nom plus descriptif
  "type": "module",
  "version": "1.0.0",
  "description": "Simple user registration and login with Node/Express and JSON file",
  "main": "server.js",
  "scripts": {
    "start": "node server.js", // Commande pour la production
    "dev": "nodemon server.js", // Commande pour le développement
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "axios": "^1.7.2", // Gardé si tu veux l'utiliser côté backend (sinon inutile)
    "bcryptjs": "^2.4.3", // Ajouté pour le hashage (essentiel !)
    "express": "^4.19.2"
  },
  "devDependencies": { // Nodemon est une dépendance de développement
    "nodemon": "^3.1.4"
  }
}
IGNORE_WHEN_COPYING_START
content_copy
download
Use code with caution.
Json
IGNORE_WHEN_COPYING_END

N'oublie pas de faire npm install après avoir modifié ce fichier pour installer bcryptjs et ajuster les dépendances.

Étape 3 : Corriger le Backend (controller, routes, server)

Reprenons les corrections de la réponse précédente, mais en s'assurant qu'elles sont cohérentes.

controller/usersController.js (Version Corrigée et Simplifiée)

// root/controller/usersController.js
```javascript
import fs from "fs";
import path from "path";
import { fileURLToPath } from 'url';
import bcrypt from 'bcryptjs'; // Importe bcryptjs

// Configuration pour __dirname en ES Module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_USERS_PATH = path.join(__dirname, "..", "data", "users.json");

// --- Fonctions Utilitaires pour lire/écrire le JSON ---
const readUsersFromFile = () => {
  try {
    if (!fs.existsSync(DATA_USERS_PATH)) return [];
    const data = fs.readFileSync(DATA_USERS_PATH, 'utf-8');
    return data.trim() === '' ? [] : JSON.parse(data);
  } catch (error) {
    console.error("Error reading users file:", error);
    return []; // Retourne vide en cas d'erreur
  }
};

const writeUsersToFile = (usersArray) => {
  try {
    fs.writeFileSync(DATA_USERS_PATH, JSON.stringify(usersArray, null, 2), 'utf-8');
  } catch (error) {
    console.error("Error writing users file:", error);
  }
};

// --- Fonctions du Contrôleur ---

// GET /api/users/ - Récupère tous les utilisateurs (sans mot de passe)
const getAllRegisteredUsers = (req, res) => {
  try {
    const users = readUsersFromFile();
    // Ne jamais renvoyer les mots de passe, même hashés, dans une liste complète
    const usersWithoutPassword = users.map(({ password, ...rest }) => rest);
    res.status(200).json(usersWithoutPassword);
  } catch (error) {
    console.error("Error in getAllRegisteredUsers:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// GET /api/users/:id - Récupère un utilisateur par ID (sans mot de passe)
const getRegisteredUserbyId = (req, res) => {
  try {
    const users = readUsersFromFile();
    const userId = req.params.id;
    const foundUser = users.find(user => user.id === userId);

    if (!foundUser) {
      return res.status(404).json({ message: "User not found" });
    }
    // Ne renvoie pas le mot de passe
    const { password, ...userToReturn } = foundUser;
    res.status(200).json(userToReturn);
  } catch (error) {
    console.error("Error in getRegisteredUserbyId:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// POST /api/users/register - Enregistre un nouvel utilisateur

const registerUser = async (req, res) => { // Ajout de async pour bcrypt
  try {
    const { firstname, lastname, email, username, password } = req.body;

    if (!firstname || !lastname || !email || !username || !password) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const users = readUsersFromFile();

    if (users.some(user => user.username === username)) {
        return res.status(409).json({ message: "Username already exists" });
    }
    if (users.some(user => user.email === email)) {
        return res.status(409).json({ message: "Email already exists" });
    }

    // Hashage du mot de passe
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = {
      id: Date.now().toString(), // ID Simple
      firstname,
      lastname,
      email,
      username,
      password: hashedPassword // Stocke le mot de passe hashé
    };

    users.push(newUser);
    writeUsersToFile(users);

    // Ne renvoie pas le mot de passe dans la réponse
    const { password: removedPassword, ...userToReturn } = newUser;
    res.status(201).json({ message: "User registered successfully", user: userToReturn });

  } catch (error) {
    console.error("Error in registerUser:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// POST /api/users/login - Connecte un utilisateur

const loginUser = async (req, res) => { // Ajout de async pour bcrypt
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ message: "Username and password are required" });
    }

    const users = readUsersFromFile();
    const foundUser = users.find(user => user.username === username);

    if (!foundUser) {
      // Réponse vague pour la sécurité
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Compare le mot de passe fourni avec le hash stocké
    const isMatch = await bcrypt.compare(password, foundUser.password);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Ne renvoie pas le mot de passe
    const { password: removedPassword, ...userToReturn } = foundUser;
    // Ici, tu générerais normalement un token JWT, mais pour cet exercice simple :
    res.status(200).json({ message: "Login successful", user: userToReturn });

  } catch (error) {
    console.error("Error in loginUser:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// PUT /api/users/:id - Met à jour un utilisateur (exemple simple)
const updateUser = (req, res) => {
    // Implémentation similaire à la réponse précédente si nécessaire,
    // mais attention à la sécurité (qui peut mettre à jour quoi ?)
    // et ne pas mettre à jour le mot de passe directement ici.
    res.status(501).json({ message: "Update not fully implemented" }); // 501 Not Implemented
};


// Exporte les fonctions

export default {
  getAllRegisteredUsers,
  getRegisteredUserbyId,
  registerUser,
  loginUser,
  updateUser,
};
IGNORE_WHEN_COPYING_START
content_copy
download
Use code with caution.
JavaScript
IGNORE_WHEN_COPYING_END

routes/usersRoutes.js (Pas de changement majeur nécessaire par rapport à avant)

// root/routes/usersRoutes.js
import express from 'express';
import userController from "../controller/usersController.js";

const router = express.Router();

// GET /api/users/
router.get("/", userController.getAllRegisteredUsers);
// POST /api/users/register
router.post("/register", userController.registerUser);
// POST /api/users/login
router.post("/login", userController.loginUser);
// GET /api/users/:id
router.get("/:id", userController.getRegisteredUserbyId);
// PUT /api/users/:id
router.put("/:id", userController.updateUser);

export default router;
IGNORE_WHEN_COPYING_START
content_copy
download
Use code with caution.
JavaScript
IGNORE_WHEN_COPYING_END

server.js (Assure-toi que le static serve le dossier public)

// root/server.js
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import usersRouter from "./routes/usersRoutes.js"; // Vérifie le nom de fichier

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

// Middlewares
app.use(express.json()); // Pour parser le body des requêtes POST/PUT en JSON
app.use(express.urlencoded({ extended: true })); // Pour parser les formulaires classiques si besoin

// Servir les fichiers statiques (HTML, CSS, JS du frontend) depuis le dossier 'public'
app.use(express.static(path.join(__dirname, "public")));

// Monter les routes API
app.use("/api/users", usersRouter);

// Rediriger la racine vers login.html (ou une autre page par défaut)
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "login.html"));
});

app.listen(port, () => console.log(`Server listening on http://localhost:${port}`));
IGNORE_WHEN_COPYING_START
content_copy
download
Use code with caution.
JavaScript
IGNORE_WHEN_COPYING_END

Étape 4 : Corriger le Frontend (HTML et JS)

Place tes fichiers login.html, register.html et les fichiers JS du frontend dans un dossier nommé public à la racine de ton projet.

public/register.html (Ajout des IDs et du script)

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Register page</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
      crossorigin="anonymous"
    />
    <style> /* Ajout d'un peu de style pour le message */
      .message { margin-top: 15px; }
    </style>
  </head>
  <body>

    <!-- NAVBAR -->
    <nav class="navbar navbar-expand-lg bg-body-tertiary mb-4">
      <!-- ... (navbar content comme avant) ... -->
       <li class="nav-item">
          <a class="nav-link" aria-current="page" href="login.html">Login</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="register.html">Register</a>
        </li>
      <!-- ... (reste navbar) ... -->
    </nav>

    <!-- FORM -->
    <div class="container">
      <h1>Register</h1>
      <!-- Ajout d'un ID au formulaire -->
      <form id="registerForm">
        <div class="mb-3">
          <label for="firstname" class="form-label">First name</label>
          <!-- Ajout des IDs -->
          <input type="text" class="form-control" id="firstname" name="firstname" required/>
        </div>
        <div class="mb-3">
          <label for="lastname" class="form-label">Last name</label>
          <input type="text" class="form-control" id="lastname" name="lastname" required/>
        </div>
        <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input type="email" class="form-control" id="email" name="email" required/>
        </div>
        <div class="mb-3">
          <label for="username" class="form-label">Username</label>
          <input type="text" class="form-control" id="username" name="username" required/>
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <!-- Change le type en password pour masquer les caractères -->
          <input type="password" class="form-control" id="password" name="password" required/>
        </div>
        <div>
          <!-- Change le type en submit pour une meilleure sémantique, le JS interceptera -->
          <button type="submit" class="btn btn-primary" id="submitRegister">Register</button>
        </div>
      </form>
      <!-- Zone pour afficher les messages -->
      <div id="messageArea" class="message"></div>
    </div>

    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
      crossorigin="anonymous"
    ></script>
    <!-- Inclusion du script JS pour cette page (type="module") -->
    <script type="module" src="register.js"></script>
  </body>
</html>
IGNORE_WHEN_COPYING_START
content_copy
download
Use code with caution.
Html
IGNORE_WHEN_COPYING_END

public/login.html (Léger ajustement et inclusion du script)

<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Login page</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
     <style> /* Ajout d'un peu de style pour le message */
      .message { margin-top: 15px; }
    </style>
  </head>
  <body>

    <nav class="navbar navbar-expand-lg bg-body-tertiary mb-4">
     <!-- ... (navbar content comme avant) ... -->
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="login.html">Login</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="register.html">Register</a>
        </li>
     <!-- ... (reste navbar) ... -->
    </nav>

    <!-- FORM -->
     <div class="container">
        <h1>Login</h1>

        <form id="loginForm"> <!-- Ajout ID au formulaire -->
          <div class="mb-3">
            <label for="username" class="form-label">Username</label>
            <input type="text" class="form-control" name="username" id="username" required/>
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input type="password" class="form-control" name="password" id="password" required/> <!-- Type password -->
          </div>
          <div>
            <button type="submit" class="btn btn-primary" id="submitLogin">Login</button> <!-- Type submit -->
          </div>
        </form>
         <!-- Zone pour afficher les messages -->
        <div id="messageArea" class="message"></div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
    <!-- Inclusion du script JS pour cette page (type="module") -->
    <script type="module" src="login.js"></script>
  </body>
</html>
IGNORE_WHEN_COPYING_START
content_copy
download
Use code with caution.
Html
IGNORE_WHEN_COPYING_END

public/register.js (Nouveau fichier pour la logique d'enregistrement)

// public/register.js
```javascript
const registerForm = document.getElementById('registerForm');
const messageArea = document.getElementById('messageArea');

registerForm.addEventListener('submit', async (event) => {
  event.preventDefault(); // Empêche la soumission HTML classique

  // Récupère les valeurs des champs
  const firstname = document.getElementById('firstname').value;
  const lastname = document.getElementById('lastname').value;
  const email = document.getElementById('email').value;
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Validation simple côté client
  if (!firstname || !lastname || !email || !username || !password) {
    showMessage('Please fill in all fields.', 'danger');
    return;
  }

  try {
    const response = await fetch('/api/users/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ firstname, lastname, email, username, password }),
    });

    const result = await response.json(); // Attend la réponse JSON

    if (response.ok) { // Statut HTTP 200-299
      showMessage(result.message || 'Registration successful!', 'success');
      // Optionnel: rediriger vers la page de login après un court délai
      setTimeout(() => {
         window.location.href = 'login.html';
      }, 2000);
    } else {
      // Affiche le message d'erreur du backend
      showMessage(result.message || 'Registration failed.', 'danger');
    }
  } catch (error) {
    console.error('Registration error:', error);
    showMessage('An error occurred during registration.', 'danger');
  }
});

// Fonction pour afficher les messages
function showMessage(message, type = 'info') { // type peut être 'success', 'danger', 'warning', 'info'
    messageArea.innerHTML = `<div class="alert alert-${type}" role="alert">${message}</div>`;
}
IGNORE_WHEN_COPYING_START
content_copy
download
Use code with caution.
JavaScript
IGNORE_WHEN_COPYING_END

public/login.js (Nouveau fichier pour la logique de connexion, remplace script.js)

// public/login.js
```javascript

const loginForm = document.getElementById('loginForm');
const messageArea = document.getElementById('messageArea');

loginForm.addEventListener('submit', async (event) => {
  event.preventDefault(); // Empêche la soumission classique

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (!username || !password) {
    showMessage('Please enter username and password.', 'warning');
    return;
  }

  try {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    const result = await response.json();

    if (response.ok) {
      showMessage(result.message || 'Login successful!', 'success');
      // Que faire après le login ?
      // Pour cet exercice, on affiche juste un message.
      // Dans une vraie app, on stockerait un token, on redirigerait, etc.
      console.log('Logged in user:', result.user); // Affiche les infos user (sans mdp) dans la console
       // Optionnel: rediriger vers une page "profil" ou "accueil" si elle existait
       // window.location.href = 'profile.html';
    } else {
      showMessage(result.message || 'Login failed.', 'danger');
    }
  } catch (error) {
    console.error('Login error:', error);
    showMessage('An error occurred during login.', 'danger');
  }
});

// Fonction pour afficher les messages (identique à register.js)
function showMessage(message, type = 'info') {
    messageArea.innerHTML = `<div class="alert alert-${type}" role="alert">${message}</div>`;
}
IGNORE_WHEN_COPYING_START
content_copy
download
Use code with caution.
JavaScript
IGNORE_WHEN_COPYING_END

Structure Finale des Dossiers/Fichiers :

DC/
├── node_modules/
├── controller/
│   └── usersController.js
├── data/
│   └── users.json        <-- Doit être [] au début
├── public/               <-- Dossier pour le frontend
│   ├── register.html
│   ├── login.html
│   ├── register.js       <-- JS pour register.html
│   └── login.js          <-- JS pour login.html
├── routes/
│   └── usersRoutes.js    <-- Vérifie bien ce nom
├── .gitignore            <-- Important (pour ignorer node_modules, data/users.json peut-être)
├── package.json
├── package-lock.json
└── server.js
IGNORE_WHEN_COPYING_START
content_copy
download
Use code with caution.
IGNORE_WHEN_COPYING_END

Pour Lancer :

Crée la structure de dossiers ci-dessus.

Place les codes corrigés dans les bons fichiers.

Assure-toi que data/users.json existe et est [].

Ouvre ton terminal dans le dossier DC.

Lance npm install.

Lance le serveur avec npm run dev (utilise nodemon).

Ouvre ton navigateur et va sur http://localhost:3000. Tu devrais voir la page de login. Tu peux naviguer vers /register.html via le lien de la navbar.

Maintenant, le frontend communique correctement avec le backend via des requêtes fetch, et le backend gère la logique et les données (avec une sécurité de mot de passe basique mais essentielle grâce à bcryptjs).