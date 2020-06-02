pipeline {
    environment {
        HOME = '.'
        CI = 'true' 
    }
    stages {
        stage('Linting') {
            agent {
                docker {
                    image 'node:12-alpine3.10'
                    args '-p 3000:3000'
                }
            }
            steps {
                sh 'echo "Running the linting tools"'
                sh 'npm install'
                sh 'npm run lint'
            }
        }

        stage('Testing') {
            agent {
                docker {
                    image 'node:12-alpine3.10'
                    args '-p 3000:3000'
                }
            }
            steps {
                sh 'echo "Running tests"'
                sh 'npm run test'
            }
        }

        stage('Build') {
            agent any
            steps {
                sh "docker --version"
            }
        }

        stage('Push image to docker hub') {
            agent any
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