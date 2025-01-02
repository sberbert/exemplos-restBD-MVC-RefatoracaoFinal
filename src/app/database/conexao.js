//importando o node module do mysql
import mysql from 'mysql'

const conexao =  mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '',
    database: 'bdcopa'
})

conexao.connect()
/**
 * Executa um código sql com ou sem valores
 * @param {String} sql instrução sql a ser executada
 * @param {String id | [selecao, id]} valores a serem passados para o sql - opcional
 * @param {String}   mensagem a ser exibida
 * @returns objeto da promise
 */
export const consulta =  (sql, valores='', mensagemReject) => {
    return new Promise((resolve, reject) => {
        conexao.query(sql, valores, (error, result) => {
            if (error) {                    
                return reject(mensagemReject)                
            } else {
                const row = JSON.parse(JSON.stringify(result))
                return resolve(row)
            }
        })     
    })    
}

//para poder utiizar em outros arquivos
export default conexao
