pipeline {
    agent any

    environment {
        // Define variables here if needed
        APP_NAME = 'jenkins-demo'
    }

    stages {
        stage('Checkout') {
            steps {
                // This fetches the code from your GitHub repo
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing packages...'
                // For Node.js. If using Python, use 'pip install' etc.
                sh 'npm install' 
            }
        }

        stage('Run Tests') {
            steps {
                echo 'Running unit tests...'
                sh 'npm test'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying application on HTTP Server...'
                // Agar pehle se koi node app chal rahi hai toh use stop karein (taaki port conflict na ho)
                sh 'pkill -f "node app.js" || true'
                
                // App ko background mein run karein taaki Jenkins pipeline block na ho
                sh 'nohup node app.js > output.log 2>&1 &'
                
                echo 'Application is running on port 3000!'
            }
        }

    post {
        always {
            echo 'Pipeline finished. Cleaning up workspace...'
            cleanWs() // Cleans up the workspace after the run
        }
        success {
            echo 'Pipeline succeeded! 🎉'
        }
        failure {
            echo 'Pipeline failed. ❌ Check the logs.'
        }
    }
}
