pipeline {
    agent any

    environment {
        APP_NAME = 'jenkins-demo'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing packages...'
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
                // Purane chal rahe node process ko kill karein taaki port 3000 khali ho sake
                sh 'pkill -f "node app.js" || true'
                
                // App ko background mein run karein taaki pipeline aage badh sake
                sh 'nohup node app.js > output.log 2>&1 &'
                
                echo 'Application is running on port 3000!'
            }
        }
    }
}
