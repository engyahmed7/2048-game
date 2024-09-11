# 2048 Game (Frontend + Backend)

This project is a full implementation of the classic 2048 game, featuring a React frontend and a Node.js/Express backend with Socket.IO for real-time synchronization.

## Features

- Play the 2048 game using arrow keys.
- Real-time updates between the client and server via Socket.IO.
- Game over detection and new game initialization.
- Responsive grid design.

## Technologies Used

- **Frontend**: React, Socket.IO Client, CSS
- **Backend**: Node.js, Express, Socket.IO

## Project Structure

- `/2048-game-frontend`: Contains all the code related to the React frontend.
- `/2048-game-backend`: Contains the Node.js/Express server handling the game logic and socket connections.

## Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/engyahmed7/2048-game.git
cd 2048-game
```

### 2. Install dependencies

**For the backend** (inside the root directory):

```bash
npm install
```

**For the frontend** (inside `/2048-game-frontend`):

```bash
cd 2048-game-frontend
npm install
```

### 3. Running the project

#### Backend

To start the backend server:

```bash
npm start
```

The backend will run on `http://localhost:4000`.

#### Frontend

To start the frontend React app:

```bash
cd 2048-game-frontend
npm start
```

The frontend will run on `http://localhost:3000`.

### 4. Playing the Game

- Once both servers are running, open your browser and go to `http://localhost:3000`.
- Use arrow keys to play the game.
- The game will update in real-time, with the backend managing the grid state.

## Configuration

- **CORS**: Make sure the frontend is allowed to connect to the backend by configuring CORS in the backend code.
- **Socket.IO**: The frontend and backend communicate using **Socket.IO** for real-time updates.

## Contributing

Feel free to open issues, fork the repository, and create pull requests to contribute to this project.

## License

This project is licensed under the MIT License.