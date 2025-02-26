import { turmas } from "../../../config/database.js"
import { TurmaModel } from "../models/index.js"
import { AlunoController } from "../../Aluno/controllers/index.js"
import { ProfessorController } from "../../Professor/controllers/index.js"

export class TurmaController {
    criar(cod, nome, sala, capacidade) {
    try {
        const novaTurma = new TurmaModel(cod, nome, sala, capacidade)
        turmas.push(novaTurma)
        console.table(novaTurma)
    } catch (error) {
        console.error("Erro ao tentar criar turma", error.message)
    }
}

    editar(cod, novoNome, novaSala, novaCapacidade) {
        try {
            const turma = turmas.find((turma) => turma.getcod === cod)
            if (!turma) {
                return console.log("Turma não encontrada!")
            }
            if (turma) {
                turma.nome = novoNome || turma.nome
                turma.sala = novaSala || turma.sala
                turma.capacidade = novaCapacidade || turma.capacidade
            }
            console.table(turma)
        } catch (error) {
            console.error("Erro ao tentar atulizar a Turma", error.message)
        }
    }

    deletarPorCod() {
        try {
            const index = turmas.findIndex((turma) => turma.getcod === cod)
            if (index === -1) {
                return console.log("Turma não encontrada")
            }
            turma.splice(index, 2)
            console.log("Turma excluida com sucesso!")
        } catch (error) {
            console.error("Erro ao excluir a Turma!")
        }
    }
    deletarTodas() {
        try {
            turmas.length = 0
            console.error("Todos os alunos excluidos com sucesso!")
        } catch (error) {
            console.error("Erro ao tentar limpar banco de dados", error.message)
        }
    }
    listarPorCodigo(cod) {
        try {
            const turma = turmas.find((turma) => turma.getcod === cod)
            if(!turma){
                return console.log("Turma não encontrada!")
            }
            console.table(turma)
        } catch (error) {
            console.error("Erro ao tentar exibir turma", error.message)
        }
    }
    listarTodas() {
        try {
            if(turmas.length === 0) {
                return console.log("Não existem Turmas a serem exibidas")
            }
            console.table(turmas)
        } catch (error) {
            console.error("Erro ao tentar exibir as turmas", error.message)
        }
    }
    
    }
    