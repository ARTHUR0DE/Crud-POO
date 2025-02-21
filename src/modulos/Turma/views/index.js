import input from 'prompt-sync'
import { TurmaController } from '../controllers/index.js'

export class TurmaView {    
    listarTurmas() {
        console.log("\nLista de Turmas:")
        console.log(TurmaController.listarTurmas())
    }
    criarTurma() {
        const cod = input("Digite o código da turma: ")
        const nome = input("Digite o nome da turma: ")
        const sala = input("Digite a sala da turma: ")
        const capacidade = input("Digite a capacidade da turma: ")
        TurmaController.criarTurma(cod, nome, sala, capacidade) 
    }
    editar() {
        const codigo = input("Insira o código da turma:")
        const novoNome = input("Insira o novo nome da turma: ")
        const novaSala = input("Insira a nova sala da turma: ")
        const novaCapacidade = input("Insira a nova capacidade da turma: ")
        TurmaController.editar(codigo, novoNome, novaSala, novaCapacidade)
    }
    deletarPorCodigo() {
        const deletarPorCodigo = input("Insira o código da turma que deseja excluir: ")
        TurmaController.deletarPorCodigo(deletarPorCodigo)
    }
    deletarTodos() {
        TurmaController.deletarTodos()
        console.log("\n Todas as turmas foram deletadas com sucesso!")
    }
    listarPorCodigo() {
        const listarCodigo = input("Insira o código da turma: ")
        TurmaController.listarPorCodigo(listarCodigo)
    }
}