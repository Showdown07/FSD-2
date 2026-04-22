# Experiment 20: Implement CI/CD pipeline for application deployment

This folder contains the files added for Experiment 20.

## Purpose

Experiment 20 extends the existing `Testing` module by adding Docker-based deployment and a CI/CD workflow with GitHub Actions.

## Files In This Folder

- `Dockerfile` builds the backend application by using `Testing/Backend`
- `frontend.Dockerfile` builds the frontend application by using `Testing/Frontend`
- `README.md` documents the Docker and GitHub Actions setup for this experiment

## Existing Project Used

This experiment uses the already prepared project inside:

- `Testing/Backend` for Flask backend tests and deployment
- `Testing/Frontend` for React frontend tests and deployment

## Backend Docker Commands

```bash
cd D:\Theory\FS1\FSD-2
docker build -f Exp20/Dockerfile -t testing-backend .
docker rm -f testing-backend-container
docker run -d --name testing-backend-container -p 5000:5000 testing-backend
docker ps
```

Verify backend:

```bash
Invoke-RestMethod http://127.0.0.1:5000/
```

## Frontend Docker Commands

```bash
cd D:\Theory\FS1\FSD-2
docker build -f Exp20/frontend.Dockerfile -t testing-frontend .
docker rm -f testing-frontend-container
docker run -d --name testing-frontend-container -p 4173:4173 testing-frontend
docker ps
```

Verify frontend:

```bash
http://127.0.0.1:4173/
```

## GitHub Actions Workflow

The active workflow stays at `.github/workflows/ci.yml` because GitHub only runs workflows from that location.

### Pipeline Stages

1. `backend-test` runs `pytest` for `Testing/Backend`
2. `frontend-test` runs `npm test` for `Testing/Frontend`
3. `docker-publish` builds the backend image and pushes it to `ghcr.io`
4. `deploy-container` pulls the backend image, runs the container, and verifies the `/` route

## Submission Screenshots

Capture these screenshots for submission:

- backend Docker image/container proof
- frontend Docker image/container proof if required by faculty
- backend response from `http://127.0.0.1:5000/`
- frontend preview from `http://127.0.0.1:4173/`
- GitHub Actions workflow success page
- GitHub package page for published backend image

## Expected Outcome

- backend tests pass
- frontend tests pass
- backend Docker image builds successfully
- backend container runs successfully
- frontend Docker image builds successfully
- frontend container runs successfully
- GitHub Actions CI/CD pipeline completes successfully
