pipeline {
    agent {
        docker {
            image 'node:12-alpine3.10'
            args '-p 3000:3000'
        }
    }
    environment {
        CI = 'true' 
    }
    stages {
        stage('Linting') {
            steps {
                sh 'echo "Running the linting tool tidy"'
                sh 'npm install'
                sh 'npm run lint'
            }
        }

        stage('Testing') {
            steps {
                sh 'echo "Running tests"'
                sh 'npm run test'
            }
        }

        stage('Build') {
            steps {
                sh "docker build . -t agmeteor/conway-game:latest"
            }
        }

        stage('Push image to docker hub') {
            steps {
                withCredentials([string(credentialsId: 'docker-hub', variable: 'dockerHubPwd')]) {
                    sh "docker login -u agmeteor -p ${dockerHubPwd}"
                    sh "docker push agmeteor/conway-game:latest"
                }
            }
        }
    }

    post {
        always {
            emailext body: 'A Test EMail', recipientProviders: [[$class: 'DevelopersRecipientProvider'], [$class: 'RequesterRecipientProvider']], subject: 'Test'
        }
    }
}