pipeline {
    agent any
    stages {
        stage('Linting') {
            steps {
                sh 'echo "Running the linting tool tidy"'
                sh 'npm run lint'
            }
        }

        stage('Testing') {
            steps {
                sh 'echo "Running tests"'
                sh 'npm run test'
            }
        }
    }
}