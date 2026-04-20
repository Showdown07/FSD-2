# Full Stack Testing Workflow

This repository contains a small full stack testing setup with:

- a Flask backend that exposes student CRUD APIs
- a React + Vite frontend that renders a login form
- backend and frontend automated tests
- a GitHub Actions workflow that runs both test suites

## Project Structure

- `Testing/Backend` contains the Flask app, student routes, and `pytest` test cases.
- `Testing/Frontend` contains the React form app, Vitest configuration, and component tests.
- `.github/workflows/ci.yml` contains the CI workflow for backend and frontend test execution.

## Backend Work Completed

The backend test setup covers a simple student management API built with Flask.

### Backend Features

- Flask application factory in `Testing/Backend/app.py`
- student routes grouped with a Flask blueprint in `Testing/Backend/routes/student_routes.py`
- in-memory CRUD operations for students
- root health-style route returning a backend status message

### Backend Testing

The backend tests are written with `pytest` in `Testing/Backend/test_app.py`.

Covered test cases:

- create a student with `POST /students`
- fetch all students with `GET /students`
- fetch a single student with `GET /students/<id>`
- update a student with `PUT /students/<id>`
- delete a student with `DELETE /students/<id>`

### Backend Run Commands

```bash
cd Testing/Backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
pytest
```

## Frontend Work Completed

The frontend test setup uses React, Vite, Material UI, Testing Library, and Vitest.

### Frontend Features

- login form component in `Testing/Frontend/src/components/form.jsx`
- controlled email and password inputs
- client-side validation for required fields
- email format validation
- minimum password length validation
- success alert on valid submission
- Material UI components for form layout and controls

### Frontend Testing

The frontend component tests are in `Testing/Frontend/src/components/Form.test.jsx`.

Covered test cases:

- rendering the email field, password field, and login button
- showing a validation error for a short password
- successful submission with valid credentials

### Frontend Run Commands

```bash
cd Testing/Frontend
npm ci
npm test
```

## CI Workflow Work Completed

The GitHub Actions workflow runs backend and frontend tests automatically on push and pull request events.

### CI Fixes Applied

- updated the frontend workflow runtime to Node `20`
- changed frontend dependency installation from `npm install` to `npm ci`
- removed the Vitest inline dependency override that was pulling the wrong encoding dependency chain
- fixed malformed JSON in `Testing/package.json`
- pinned the frontend encoding dependency path using `overrides` so CI installs remain stable

### Current Workflow File

- `.github/workflows/ci.yml`

## Workflow Screenshots

Add workflow screenshots to `docs/screenshots/` and then keep the filenames below so they render automatically in this README.

Suggested filenames:

- `backend-workflow-success.png`
- `frontend-workflow-success.png`
- `frontend-workflow-error.png`

When the images are available, uncomment and keep the matching entries below:

```md
![Backend Workflow Success](docs/screenshots/backend-workflow-success.png)
![Frontend Workflow Success](docs/screenshots/frontend-workflow-success.png)
![Frontend Workflow Error](docs/screenshots/frontend-workflow-error.png)
```

## Expected Results

- backend tests should pass through `pytest`
- frontend tests should pass through `vitest`
- GitHub Actions should run both jobs from the `Testing/Backend` and `Testing/Frontend` directories

## Notes

- the backend currently uses in-memory storage, so data resets when the app restarts
- the frontend tests run in a `jsdom` environment
- the CI configuration is designed to keep frontend dependency resolution consistent with the checked-in lockfile
