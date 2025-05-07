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