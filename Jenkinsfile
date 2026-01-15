pipeline {
  agent any
  stages {
    stage('Check NPM & Node Version') {
      steps {
        sh '''sh \'echo just Checking NPM & Node Version\'
sh \'npm --version\'
sh \'node --version\''''
      }
    }

    stage('Clone Project') {
      steps {
        git(url: 'https://github.com/arsentomachenko/portfolio.git', branch: 'main')
      }
    }

    stage('install Dependencies') {
      steps {
        sh '''sh \'cd portfolio\'
sh \'npm install\''''
      }
    }

  }
}