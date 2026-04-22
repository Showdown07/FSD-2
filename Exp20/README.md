# Experiment 20: Implement CI/CD pipeline for application deployment

This folder contains the new files added for Experiment 20.

## Purpose

Experiment 20 extends the already created `Testing` module by adding Docker-based backend deployment and a CI/CD workflow with GitHub Actions.

## Files In This Folder

- `Dockerfile` builds the backend application by using the existing `Testing/Backend` code.
- `README.md` documents the Docker and GitHub Actions setup for this experiment.

## Existing Project Used

This experiment uses the already prepared project inside:

- `Testing/Backend` for Flask backend tests and deployment
- `Testing/Frontend` for React frontend tests

## Docker Commands

### Build Image

```bash
cd D:\Theory\FS1\FSD-2
docker build -f Exp20/Dockerfile -t testing-backend .
```

### Run Container

```bash
docker run -d --name testing-backend-container -p 5000:5000 testing-backend
```

### Verify Container

```bash
docker ps
curl http://localhost:5000/
```

### Stop Container

```bash
docker rm -f testing-backend-container
```

## GitHub Actions Workflow

The active workflow stays at the repository path `.github/workflows/ci.yml` because GitHub only runs workflows from that location.

## Submission Screenshots

Capture these screenshots for submission:

- Docker image build in CLI
- running backend container and `docker ps`
- backend response from `http://localhost:5000/`
- GitHub Actions workflow success page

## Expected Outcome

- backend tests pass
- frontend tests pass
- Docker image builds successfully
- backend container runs successfully
- GitHub Actions CI/CD pipeline completes successfully
