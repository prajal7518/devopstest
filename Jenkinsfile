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
                // Purane node process ko stop karein
                sh 'pkill -f "node app.js" || true'
                
                // JENKINS_NODE_COOKIE dene se Jenkins is process ko kill nahi karega
                sh "JENKINS_NODE_COOKIE=dontKillMe nohup node app.js > output.log 2>&1 &"
                
                echo 'Application is running on port 3000!'
            }
        }
