node {
    def app
    def prod
    def prodDockerfile = 'Dockerfile.prod'

    stage('Clone repository') {
        checkout scm
    }

    stage('Build image') {
        app = docker.build("dev-image")
        prod = docker.build("agmeteor/conway-game", "-f ${prodDockerfile} .")
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

    stage('Dep') {
        withAWS(region:'us-east-2', credentials:'aws-creds') {
            sh 'aws configure list'
        }
    }

    stage('Deploy') {
        withCredentials([file(credentialsId: 'kubeconfig', variable: 'KUBECONFIG')]) {
            sh("kubectl --kubeconfig $KUBECONFIG get pods")
        }
    }
}