node {
    def app

    stage('Clone repository') {
        checkout scm
    }

    stage('Build image') {
        app-dev = docker.build("dev-image")
        app-prod = docker.build("agmeteor/conway-game", "./prod")
    }

    withEnv(["HOME=.", "CI=true"]) {
        stage('Linting') {
            app-dev.inside {
                sh 'yarn'
                sh 'yarn lint'
            }
        }

        stage('Testing') {
            app-dev.inside {
                sh 'yarn'
                sh 'yarn test'
            }
        }
    }

    stage('Push image') {
        docker.withRegistry('https://registry.hub.docker.com', 'dockerhubCreds') {
            app-prod.push("${env.BUILD_NUMBER}")
            app-prod.push("latest")
        }
    }
}