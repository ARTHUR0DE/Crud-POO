import { alunos } from "../../../config/database.js";
import { AlunoModel } from "../models/index.js";
export class AlunoController {
    //Create - criando o aluno no arrey alunos
    criar(matricula, nome, email, senha) {
        try {
            const novoAluno = new AlunoModel(matricula, nome, email, senha)
            alunos.push(novoAluno)
            console.table(novoAluno)
        } catch (error) {
            console.error("Erro ao tentar criar aluno", error.message)
        }
    }

    editar(matricula, novoNome, novoEmail, novaSenha) {
        try {
            const aluno = alunos.findIndex((aLuno) => aLuno.getmatricula === matricula)
            if (!aluno) {
                return console.log("Aluno não encontrado!")
            }
            if (aluno) {
                aluno.nome = novoNome || aluno.nome //null
                aluno.email = novoEmail || aluno.email
                aluno.senha = novaSenha || aluno.senha
                console.table(aluno)
            }
        } catch (error) {
            console.error("Erro ao tentar atualizar o aluno", error.message)
        }
    }

    deletarPorMatricula() {
        try {
            const index = alunos.findIndex((aLuna) => aLuna.getmatricula === matricula)
            if(index === -1){
                return console.log("Aluno não encontrado!")
            }
            alunos.splice(index, 2)
            console.log("Aluno excluido com sucesso!")
        } catch (error) {
            console.error("Erro ao exluir o Aluno!")
        }
    }
    deletarTodos() {
        try {
            alunos.length = 0
            console.error("Todos os alunos excluidos com sucesso!")
        } catch (error) {
            console.error("Erro ao tentar limpar banco de dados", error.message) 
        }
    }
    listarPorMatricula() {
        try {
            const aluno = alunos.findIndex((aLuno) => aLuno.getmatricula === matricula)
            if(!aluno){
                return console.log("Aluno não encontrado!")
            }
        } catch (error) {
            console.error("Erro ao tentar exibir o aluno", error.message)
        }
    }
    listarTodos() {
        try {
            if(alunos.length === 0) {
                return console.log("Não existem alunos a serem exibidos")
            }
            console.table(alunos)
        } catch (error) {
            console.error("Erro ao tentar exibir os alunos", error.message)    
        }
    }

}