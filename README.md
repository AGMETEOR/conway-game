# Conway's game of life

OPS OVERENGINEERED

![Screen Shot 2020-04-21 at 00 32 33](https://user-images.githubusercontent.com/28563179/79801976-cea4d300-8367-11ea-84f7-3f3e676f2e31.png)

## Development
``` 
npm install && npm start
```
 Or use docker and create container from Dockerfile in the project root

## Run tests
``` 
npm run test
```

## Good to know information
- The deployment strategy used in the Jenkinsfile is Blue/Green deployment
- Jenkins server is set up on an EC2 Machine on AWS
- A kubernetes cluster is set up using `eksctl` that uses CloudFormation in the background to create cluster resources
- Node used for green deployments is labeled using 
`kubectl label nodes ip-XX-XX-XX-XX.us-east-2.compute.internal dep=green`
- Nodes used for stable or blue depoyments belong to NodeGroup `frontend-workers` and the label 
used is `alpha.eksctl.io/nodegroup-name: frontend-workers`
- To get the green loadbalancer service run `kubectl get service/conway-frontend-green-svc |  awk {'print $1" " $2 " " $4 " " $5'} | column -t`

- To get the blue or stable loadbalancer service run `kubectl get service/conway-frontend-svc |  awk {'print $1" " $2 " " $4 " " $5'} | column -t`


## Possible Improvements
- Add linting rules
- Add more tests especially to the game component and play rules
- Add more game controls like for speed, reseting the game etc
