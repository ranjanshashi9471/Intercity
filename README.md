# Intercity Express — Train Booking System

Full-stack Intercity Express Train Booking System built with Node.js, Express, MySQL and React.

---

## Project Structure

- `intercity_backend/` — Express backend with MySQL integration
- `intercity_frontend/` — React frontend (Create React App)
- `intercity_backend/IES.sql` — MySQL dump containing schema and sample data

---

## Key Features

- User registration and login (passwords hashed with `bcrypt`).
- Train search by start/end station and date.
- Station listing endpoint for populating UI dropdowns.
- Ticket booking endpoint (note: booking implementation is partially scaffolded in `bookingController.js`).
- Relational MySQL schema with tables for users, trains, routes, stations, tickets, coaches, seats, and schedules.

---

## Technologies

- Backend: Node.js, Express, mysql2, bcrypt, dotenv, cors
- Frontend: React, Axios, react-router-dom, react-hook-form
- Database: MySQL (dump available in `intercity_backend/IES.sql`)

---

## Quick Start

Prerequisites: Node.js (16+ recommended), npm, MySQL server.

1. Import the database

Option A — create database then import (recommended):

```bash
# Log into MySQL
mysql -u <user> -p

# inside mysql shell (replace names if you prefer another DB name)
CREATE DATABASE IES;
USE IES;
SOURCE ./intercity_backend/IES.sql;
EXIT;
```

Option B — single-line import (when database already exists):

```bash
mysql -u <user> -p IES < intercity_backend/IES.sql
```

Notes:

- The dump includes sample data and three sample users (email addresses are present in the SQL). Passwords are stored as bcrypt hashes.

2. Backend install & run

```bash
cd intercity_backend
npm install

# dev (auto-restart):
npx nodemon server.js

# or run directly:
node server.js
```

The backend will attempt to connect to MySQL and, on success, start on port `5000`.

Environment variables (create a `.env` file in `intercity_backend/`):

```env
MYSQL_HOST=localhost
MYSQL_PORT=3306
MYSQL_DATABASE=IES
MYSQL_USER=<your_db_user>
MYSQL_PASSWORD=<your_db_password>
```

3. Frontend install & run

```bash
cd intercity_frontend
npm install
npm start
```

The frontend `package.json` is configured with a `proxy` to `http://localhost:5000/` so API calls from the React app will be forwarded to the backend during development.

---

## API Reference (implemented endpoints)

Base URL (development): `http://localhost:5000`

- `POST /auth/register` — register a new user

  - Body: `{ name, email, password, dob }`
  - Behaviour: checks age >= 18, hashes password, inserts into `users` table.

- `POST /auth/login` — login existing user

  - Body: `{ email, password }`
  - Behaviour: fetches user by email, compares bcrypt hash.

- `GET /info/stations` — list stations

  - Returns: `station_code`, `station_name` array from `stations` table.

- `GET /info/trains` — search trains

  - Query params: `startStn`, `endStn`, `date` (date used for searching schedule in DB)
  - Behaviour: finds trains by matching routes between `startStn` and `endStn`.

- `POST /tickets/booktickets` — book tickets (endpoint scaffold)
  - Body: `{ train_no, passengers, doj, start_stn, end_stn }`
  - Note: `bookingController.js` currently contains initial scaffolding and availability checks are incomplete — review and finish the logic before using in production.

---

## Database Schema (high level)

The SQL dump (`intercity_backend/IES.sql`) contains tables for:

- `users`, `passengers`
- `trains`, `routes`, `train_schedule`, `regular_train_schedule`
- `stations`
- `tickets`, `ticket_pass`
- `coaches`, `act_coaches`, `coach_seats`, `seats`
- `staffs`, `staff_schedule`, `maintainance`

The schema is normalized and includes foreign keys and sample data for stations, trains, coaches and seats.

---

## Known Limitations & Notes

- The booking logic in `intercity_backend/controllers/bookingController.js` is incomplete and contains placeholder/unfinished SQL. Treat booking as experimental until that controller is completed and tested.
- Error handling is present in controllers but consider adding centralized error middleware and input validation (e.g., `express-validator`) for production readiness.
- Consider adding scripts to the backend `package.json` (e.g. `start`, `dev`) for easier startup.

---

## Development & Contribution

- Fork the repo and submit pull requests.
- If you add breaking changes to the API, update this README's API Reference.
- To test changes locally: import the provided SQL dump, run backend, then run frontend and exercise flows from the UI.

---

## Contact

If you want me to expand this README with automated tests, CI, or containerized (Docker) setup, tell me which you'd prefer and I can add it.

---

License: MIT (add LICENSE file if you want to publish)
