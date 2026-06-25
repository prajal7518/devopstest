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
                echo 'Deploying application...'
                // Add your deployment commands here (e.g., Docker, AWS, Heroku)
                // Example: sh 'docker build -t myapp . && docker run -d -p 3000:3000 myapp'
                sh 'echo "Application deployed successfully!"'
            }
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
