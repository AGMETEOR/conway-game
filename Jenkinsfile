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
                sh 'yarn'
                sh 'yarn lint'
            }
        }

        stage('Testing') {
            app.inside {
                sh 'yarn'
                sh 'yarn test'
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