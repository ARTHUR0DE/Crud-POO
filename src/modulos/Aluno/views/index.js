import input from 'prompt-sync';
import { AlunoController } from './modulos/Aluno/controllers/index.js';

export class AlunoView {
    listarAlunos() {
        console.log("\nLista de Alunos:")
        console.log(AlunoController.listarAlunos())
    }
    criarAluno() {
        const matricula = input("Digite a Matrícula: ")
        const nome = input("Digite o nome: ")
        const email = input("Digite o email: ")
        const senha = input("Digite a senha: ")
        AlunoController.criarAluno(matricula, nome, email, senha)
    }
    editar() {
        const matricula = input("Insira a Matrícula:")
        const novoNome = input("Insira o novo nome: ")
        const novoEmail = input("Insira o nova email: ")
        const novaSenha = input("Insira a nova senha: ")
        AlunoController.editar(matricula, novoNome, novoEmail, novaSenha)
    }
    deletarPorMatricula() {
        const deletarPorMatricula = input("Insira a matrícula do aluno que deseja excluir: ")
        AlunoController.deletarPorMatricula(deletarPorMatricula)
    }
    deletarTodos() {
        AlunoController.deletarTodos()
        console.log("\n Todos os alunos foram deletados com sucesso!")
    }
    listarPorMatricula() {
        const listarMaricula = input("Insira a Matricula do aluno: ")
        AlunoController.listarPorMatricula(listarMaricula)
    }
}