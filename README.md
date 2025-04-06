# visual-minkube

## Tools:
  
  1. minikube
  2. docker compose

## How to start service (local terminal)?
  
  1. `npm install`
  2. `npm start`
  3. To Click URL in terminal. 

## How to start minikube?
  
  1. `minikube start --driver=docker`
  2. `minikube image build -t visual-kube-app:0.1.0 .`
  3. Change directory to `deployemnt`.
  4. `kubectl apply -f visual-kube-deployment.yaml`
  5. `kubectl apply -f visual-kube-service.yaml`
  6. minikube service visual-kube-app --url

## See more
  
  1. [minikube image doc.](https://minikube.sigs.k8s.io/docs/commands/image/)
  2. [Docker image doc.](https://docs.docker.com/get-started/docker-concepts/building-images/build-tag-and-publish-an-image/)
  3. [minikube start doc.](https://minikube.sigs.k8s.io/docs/start/?arch=%2Fmacos%2Farm64%2Fstable%2Fbinary+download)
  4. [compose doc.](https://docs.docker.com/compose/how-tos/environment-variables/envvars/#compose_project_name)
    4-1. [Set to container](https://stackoverflow.com/questions/44924082/set-project-name-in-docker-compose-file)
    4-2. [ Set image policy ](https://stackoverflow.com/questions/53877516/how-do-i-set-the-imagepullpolicy-with-minikube)
  5. [Dockerfile doc.](https://docs.docker.com/build/concepts/dockerfile/)
  6. [Docker compose yaml doc](https://docs.docker.com/compose/how-tos/networking/)
  7. [Docker networks doc.](https://docs.docker.com/reference/compose-file/services/#network_mode)