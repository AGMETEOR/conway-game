pipeline {
    agent {
        docker {
            image 'node:8.12.0'
            args '-p 3000:3000'
        }
    }
    environment {
        HOME = '.'
        CI = 'true' 
    }
    stages {
        stage('Linting') {
            steps {
                sh 'echo "Running the linting tools"'
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