pipeline {
    agent any

    stages {

        stage('Clone Repository') {
            steps {
                git 'https://github.com/mafzalkalwardev/online-food-delivery.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t food-delivery-app .'
            }
        }

        stage('Run Container') {
            steps {
                bat 'docker run -d -p 5000:3000 --name food-delivery-container food-delivery-app'
            }
        }
    }
}