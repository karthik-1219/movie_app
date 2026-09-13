# Movie Picture Pipeline

A React movie catalog backed by a Flask API, packaged as two containers and deployed with Kubernetes through GitHub Actions.

## Local development

Install frontend dependencies and run its checks:

```powershell
cd frontend
npm install
npm run lint
npm test -- --run
npm run build
```

Run backend checks:

```powershell
cd backend
python -m pip install -r requirements.txt
python -m pytest -q
python -m flake8 .
```

Run both services with Docker Compose:

```powershell
docker compose up --build
```

The frontend is available at `http://localhost:3000` and the API at `http://localhost:5000/movies`.

## GitHub Actions configuration

CI workflows run on pull requests targeting `main` and can also be started manually. CD workflows run on pushes to `main` and can also be started manually. Frontend and backend changes are isolated with path filters.

Add these repository **Actions secrets**:

- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`

Add these repository **Actions variables**:

- `AWS_REGION`, for example `us-east-1`
- `EKS_CLUSTER_NAME`
- `ECR_FRONTEND_REPOSITORY`
- `ECR_BACKEND_REPOSITORY`
- `BACKEND_API_URL`, the reachable URL used by the built frontend

The AWS identity must have permission to push to both ECR repositories and update the EKS kubeconfig. It must also be authorized in the cluster's `aws-auth` configuration. Deployment waits for Kubernetes rollouts and verifies the backend `/movies` response.

## Kubernetes deployment

Each CD job applies its Kustomize directory after setting the image to `${GITHUB_SHA}`. Both services are `LoadBalancer` resources so the frontend can call the backend from a browser. Set `BACKEND_API_URL` to the backend load balancer URL before building the frontend image.
