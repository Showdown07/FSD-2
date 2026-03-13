# Authentication Methods using Flask

This project demonstrates **three different authentication mechanisms** implemented in a Flask API:

* Basic Authentication
* Token Authentication
* JWT (JSON Web Token) Authentication

The application provides several API routes to demonstrate how these authentication techniques protect resources.

---

## Features

* Flask REST API
* Basic Authentication using username and password
* Simple Token Authentication using Base64 encoding
* JWT Authentication using `flask-jwt-extended`
* Protected API routes
* JSON responses for API testing

---

## Technologies Used

* Python
* Flask
* Flask-JWT-Extended
* Gunicorn
* REST APIs

---

## Project Structure

```
Exp-9
│
├── app.py
├── requirements.txt
├── Procfile
├── README.md
└── .gitignore
```

---

## Installation

Clone the repository:

```
git clone https://github.com/your-username/repository-name.git
cd repository-name
```

Create a virtual environment:

```
python -m venv venv
```

Activate virtual environment:

Windows:

```
venv\Scripts\activate
```

Mac/Linux:

```
source venv/bin/activate
```

Install dependencies:

```
pip install -r requirements.txt
```

---

## Running the Application

Run the Flask application:

```
python app.py
```

Server will start at:

```
http://localhost:5000
```

---

## API Routes

### Home Route

```
GET /
```

Returns list of available authentication routes.

---

### Basic Authentication

```
GET /basic-protected
```

Requires **Basic Auth Header**

Example credentials:

```
username: admin
password: admin123
```

---

### Token Authentication

Login to generate token:

```
POST /token-login
```

Body:

```
{
  "username": "john",
  "password": "john123"
}
```

Access protected route:

```
GET /token-protected
```

Header:

```
x-auth-token: <token>
```

---

### JWT Authentication

Generate JWT Token:

```
POST /jwt-login
```

Body:

```
{
  "username": "admin",
  "password": "admin123"
}
```

Access protected route:

```
GET /jwt-protected
```

Header:

```
Authorization: Bearer <access_token>
```

---

## Deployment

This project can be deployed on **Render, Heroku, or other cloud platforms** using Gunicorn.

Start command for production:

```
gunicorn app:app
```

---

## Author

Shivank Yadav
