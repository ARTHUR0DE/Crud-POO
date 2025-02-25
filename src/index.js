import promptSync from 'prompt-sync'
import { AlunoController } from './modulos/Aluno/controllers/index.js'
import { TurmaController } from '../src/modulos/Turma/controllers/index.js'
import { ProfessorController } from './modulos/Professor/controllers/index.js'

const prompt = promptSync()
const alunoController = new AlunoController()
const turmaController = new TurmaController()


function menuAlunos() {
    const opcoes = [
        "1 - Criar novo aluno",
        "2 - Listar todos os alunos",
        "3 - Editar aluno por matrícula",
        "4 - Excluir todos os alunos",
        "5 - Excluir por matrícula",
        "0 - Sair"
    ]

    let opcao
    do {
        console.clear()
        console.log(opcoes.join("\n"))
        opcao = prompt("Escolha a opção desejada: ")

        switch (opcao) {
            case "0":
                console.log("Saindo...")
                break
            case "1":
                alunoController.criar()
                break
            case "2":
                alunoController.listarPorMatricula()
                break
            case "3":
                alunoController.editar()
                break
            case "4":
                alunoController.deletarPorMatricula()
                break
            case "5":
                alunoController.deletarTodos()
                break
            default:
                console.log("Opção inválida! Tente novamente.")
        }

        prompt("\nPressione Enter para continuar...")
    } while (opcao !== "0")
}
function menuTurmas() {
    const opcoes = [
        "1 - Criar nova turma",
        "2 - Listar todas as turmas",
        "3 - Listar turma por código",
        "4 - Editar turma por código",
        "5 - Excluir todas as turmas",
        "6 - Excluir por código",
        "0 - Sair"
    ]

    let opcao
    do {
        console.clear()
        console.log(opcoes.join("\n"))
        opcao = prompt("Escolha a opção desejada: ")

        switch (opcao) {
            case "0":
                console.log("Saindo...")
                break
            case "1":
                turmaController.criar()
                break
            case "2":
                turmaController.listarTodas()
                break
            case "3": 
            turmaController.listarPorCodigo()
                break
            case "4":
                turmaController.editar()
                break
            case "5":
                turmaController.deletarTodas()
                break
            case "6":
                turmaController.deletarPorCod()
                break
            default:
                console.log("Opção inválida! Tente novamente.")
        }

        prompt("\nPressione Enter para continuar...")
    } while (opcao !== "0")
}

function menuProfessor() {
    const opcoes = [
        "1 - Adicionar novo professor",
        "2 - Listar todos os professores",
        "3 - Editar professor por matrícula",
        "4 - Excluir todos os professores",
        "5 - Excluir por matrícula",
        "0 - Sair"
    ]
    let opcao
    do {
        console.clear()
        console.log(opcoes.join("\n"))
        opcao = prompt("Escolha a opção desejada: ")
    switch (opcao) {
        case 1:
            ProfessorController.criar()
            break
        case 2:
            ProfessorController.listarTodos()
            break
        case 3: 
        ProfessorController.editar()
            break
        case 4:
            ProfessorController.deletarTodos()
            break
        case 5:
            ProfessorController.deletarPorMatricula()
            break
        case 0: 
        console.log("Saindo...")
        break
        default:
            console.log("Opção inválida! Tente novamente.")
            break;
    }
    prompt("\nPressione Enter para continuar...")
    } while (opcao !== "0")
}


menuProfessor()