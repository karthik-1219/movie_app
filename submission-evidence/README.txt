Student Note

Public GitHub repository:
https://github.com/karthik-1219/movie_app

GitHub Actions workflows:
Frontend CI: https://github.com/karthik-1219/movie_app/actions/workflows/frontend-ci.yaml
Backend CI: https://github.com/karthik-1219/movie_app/actions/workflows/backend-ci.yaml
Frontend CD: https://github.com/karthik-1219/movie_app/actions/workflows/frontend-cd.yaml
Backend CD: https://github.com/karthik-1219/movie_app/actions/workflows/backend-cd.yaml

Live application evidence

Frontend LoadBalancer URL:
http://a9d25ad7552c443af97ca8c6110eaede-766453869.us-east-1.elb.amazonaws.com

Backend LoadBalancer URL:
Not available until the updated backend LoadBalancer service is deployed.

Currently reachable backend API through the frontend proxy:
http://a9d25ad7552c443af97ca8c6110eaede-766453869.us-east-1.elb.amazonaws.com/api/movies

The backend Kubernetes manifest is now configured as LoadBalancer. After the
updated manifest is applied, replace the note above with the backend service's
EXTERNAL-IP hostname and append /movies.

Required screenshots to attach to the submission:
1. Movie List page with the frontend LoadBalancer URL visible in the browser address bar.
2. Backend /movies response with the backend API URL visible in the browser address bar or terminal.
3. A successful Actions run for each of the four workflows, with the repository URL visible.

After the backend service is deployed, update the backend URL with its
EXTERNAL-IP hostname, then attach the screenshots listed above. Configure the
repository secrets required by the CD workflows before running them:
AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, AWS_REGION, EKS_CLUSTER_NAME,
FRONTEND_ECR_REPOSITORY, BACKEND_ECR_REPOSITORY, and
REACT_APP_MOVIE_API_URL.

Required workflow files included in the repository:
- .github/workflows/frontend-ci.yaml
- .github/workflows/backend-ci.yaml
- .github/workflows/frontend-cd.yaml
- .github/workflows/backend-cd.yaml

Verification notes:
- Frontend CI workflow: lint + test + docker build on pull_request to main
- Backend CI workflow: lint + test + docker build on pull_request to main
- Frontend CD workflow: lint + test + docker build + ECR push + EKS deploy on push to main
- Backend CD workflow: lint + test + docker build + ECR push + EKS deploy on push to main

Required screenshots / evidence:
- Frontend app running with the movie list loaded
- Backend API returning the movie list from /movies
- GitHub Actions run links or screenshots showing each workflow ran successfully

Note:
Update the placeholder URLs above with the live public GitHub repo and deployed application URLs before final submission.
