node {
    def app

    stage('Clone repository') {
        checkout scm
    }

    stage('Build image') {
        app = docker.build("agmeteor/conway-game")
    }

    withEnv(["HOME=.", "CI=true"]) {
        stage('Linting') {
            app.inside {
                sh 'npm install'
                sh 'npm run lint'
            }
        }

        stage('Testing') {
            app.inside {
                sh 'npm install'
                sh 'npm run test'
            }
        }
    }
}