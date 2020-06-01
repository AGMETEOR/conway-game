pipeline {
    agent any
    stages {
        stage('Linting') {
            steps {
                sh 'echo "Running the linting tool tidy"'
                sh 'tidy -q -e *.html'
            }
        }

        stage('Testing') {
            steps {
                sh 'echo "Running the linting tool tidy"'
                sh 'tidy -q -e *.html'
            }
        }

        stage('Build docker image') {
            steps {
                sh 'echo "Running the linting tool tidy"'
                sh 'tidy -q -e *.html'
            }
        }

        stage('Push image to docker hub') {
            steps {
                sh 'echo "Running the linting tool tidy"'
                sh 'tidy -q -e *.html'
            }
        }

        stage('Deploy to Kubernetes cluster') {
            steps {
                sh 'echo "Uploading files to s3 bucket"'
                withAWS(region:'us-east-1', credentials:'aws-creds') {
                    s3Upload(file:'index.html', bucket:'jenkins-code', path:'')
                }
            }
        }
    }
}