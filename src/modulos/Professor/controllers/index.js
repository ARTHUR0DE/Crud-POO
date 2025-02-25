import { professores } from '../../../config/database.js';
import { ProfessorModel } from '../models/index.js';

export class ProfessorController {
    criar(nome, telefone, email, senha, matricula, turma, disciplina,) {
        try {
            const novoProfessor = new ProfessorModel(nome,telefone, email, senha, matricula, turma, disciplina)
            professores.push(novoProfessor)
            console.table(novoProfessor)
        } catch (error) {
            console.error("Erro ao tentar criar professor", error.message)
        }
    }
    editar(nome, telefone, email, senha, matricula, novaTurma, novaDisciplina) {
        try {
            const professor = professores.findIndex((professor) => professor.getMatricula === matricula)
            if (!professor) {
                return console.log("Professor não encontrado!")
            }
            if (professor) {
                professor.nome = nome || professor.nome
                professor.telefone = telefone || professor.telefone
                professor.email = email || professor.email
                professor.senha = senha || professor.senha
                professor.turma = novaTurma || professor.turma
                professor.disciplina = novaDisciplina || professor.disciplina
                console.table(professor)
            }
        } catch (error) {
            console.error("Erro ao tentar atualizar o professor", error.message)
        }
    } 
    deletarPorMatricula() {
        try {
            const index = professores.findIndex((professor) => professor.getMatricula === matricula)
            if(index === -1){
                return console.log("Professor não encontrado!")
            }
            professores.splice(index, 2)
            console.log("Professor excluido com sucesso!")
        } catch (error) {
            console.error("Erro ao exluir o Professor!")
        }
    }
    deletarTodos() {
        try {
            professores.length = 0
            console.error("Todos os professores excluidos com sucesso!")
        } catch (error) {
            console.error("Erro ao tentar limpar banco de dados", error.message) 
        }
    }
    listarPorMatricula() {
        try {
            const professor = professores.findIndex((professor) => professor.getMatricula === matricula)
            if(!professor){
                return console.log("Professor não encontrado!")
            }
        } catch (error) {
            console.error("Erro ao tentar exibir o professor", error.message)
        }
    }
    listarTodos() {
        try {
            console.table(professores   )
        } catch (error) {
            console.error("Erro ao tentar exibir os professores", error.message)
        }
    }
}

