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

    stage('Push image') {
        docker.withRegistry('https://registry.hub.docker.com', 'dockerhubCreds') {
            app.push("${env.BUILD_NUMBER}")
            app.push("latest")
        }
    }
}