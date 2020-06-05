node {
    def app
    def prod

    stage('Clone repository') {
        checkout scm
    }

    stage('Build image') {
        app = docker.build("dev-image")
        prod = docker.build("agmeteor/conway-game", "./prod")
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
            prod.push("${env.BUILD_NUMBER}")
            prod.push("latest")
        }
    }
}