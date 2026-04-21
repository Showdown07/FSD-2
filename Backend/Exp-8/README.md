# Experiment 8 - Flask Backend With Student CRUD Routes

## Aim

To build a simple Flask backend application and organize API routes using Flask Blueprints. The experiment demonstrates a basic backend server and CRUD operations for student data.

## Project Overview

This project is a Flask backend application with:

- a root route to verify the backend is running
- a separate route module for student CRUD operations
- deployment support using Gunicorn and Render

At present, the deployed application exposes only the root route because the student blueprint is not yet registered in `app.py`.

## Folder Structure

```text
Exp-8/
|-- app.py
|-- run.py
|-- requirements.txt
|-- routes/
|   |-- student_routes.py
|   `-- _init__.py
|-- virenv/
`-- README.md
```

## Technologies Used

- Python
- Flask
- Flask Blueprint
- Gunicorn
- Render

## Requirements

Install the required packages:

```powershell
cd "D:\Theory\FS1\FSD-2\Backend\Exp-8"
.\virenv\Scripts\Activate.ps1
pip install -r requirements.txt
```

## How To Run Locally

```powershell
cd "D:\Theory\FS1\FSD-2\Backend\Exp-8"
.\virenv\Scripts\Activate.ps1
python run.py
```

The application runs on:

- `http://127.0.0.1:5000`

## Current Active Endpoint

With the code in its current state, the working endpoint is:

- `GET /`

Local URL:

- `http://127.0.0.1:5000/`

Render URL:

- [https://fsd-2-2-1032.onrender.com/](https://fsd-2-2-1032.onrender.com/)

Expected response:

```json
{
  "message": "Backend Server is running"
}
```

## Student Routes Present In Code

The file `routes/student_routes.py` already contains student CRUD APIs:

- `POST /students`
- `GET /students`
- `GET /students/<student_id>`
- `PUT /students/<student_id>`
- `DELETE /students/<student_id>`

These routes use in-memory storage, so data is not permanently saved.

## Important Note

In the current `app.py`, the student blueprint import and registration are commented out. Because of that, the `/students` routes are not active yet.

Current status in `app.py`:

```python
# from routes.student_routes import student_bp
...
# app.register_blueprint(student_bp)
```

Because of this, requests to `/students` return `404 Not Found` until the blueprint is enabled.

## Conclusion

This experiment demonstrates how to build a basic Flask backend, separate routes using Blueprints, and perform student CRUD operations. It also shows the importance of registering route modules correctly in the main application before deployment.
