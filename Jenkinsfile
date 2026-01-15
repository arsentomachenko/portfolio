pipeline {
  agent any
  stages {
    stage('Check NPM & Node Version') {
      steps {
        sh '''echo just Checking NPM & Node Version
npm --version
node --version'''
      }
    }

    stage('Clone Project') {
      steps {
        git(url: 'https://github.com/arsentomachenko/portfolio.git', branch: 'main')
      }
    }

    stage('install Dependencies') {
      steps {
        sh '''cd portfolio
npm install'''
      }
    }

  }
}