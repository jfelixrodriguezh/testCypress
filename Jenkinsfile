pipeline{
    agent any

    parameters{
        string(name: "SPEC", defaultValue: "cypress/integration/**/**", description: "Ej: cypress/integration/*")
        choice(name: "BROWSER", choices: ['chrome','firefox'], description: "Seleccione un Navegador para Ejecutar las Pruebas")
    }

    options{
        ansiColor('xterm')
    }

    stages{
        stage('Build'){
            steps{
                echo "Building Application"
            }
        }
        stage('Testing'){
            steps{
                bat "npm i"
                bat "npx cypress run --browser ${BROWSER} --spec ${SPEC}"
            }
        }
        stage('Deploy'){
            steps{
                echo "Deploy Application"
            }
        }        
    }

    post{
        always{
            publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: 'cypress/report', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: ''])
        }
    }
}