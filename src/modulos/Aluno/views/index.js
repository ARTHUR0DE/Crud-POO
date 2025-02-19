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
        AlunoController.criarAluno()
    }
}