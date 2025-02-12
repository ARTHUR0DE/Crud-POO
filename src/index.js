import PromptSync from "prompt-sync"
import { AlunoController } from "./modulos/Aluno/controllers/index"

const aluno1 = new AlunoController()

aluno1.criar("A9111", "Irineu", "irineu@edum.senac.br", "@123")
aluno1.criar("A9222", "Borges", "borges@edum.senac.br", "@123")

aluno1.listarTodos()

aluno1.deletarPorMatricula("a9111")
aluno1.listarTodos()

aluno1.editar('a9222',null,"borgeseditado@edum.senac.br",null)
aluno1.listarTodos()

export default function menuPrincipal() {
    const imput = prompt()
    const opcoes = [
        "1 - criar aluno",
        "2 - Listar todos os alunos",
        "3 - Editar aluno por matrícula",
        "4 - Excluir todos os alunos",
        "5 - Excluir por matrícula",
        "0 - Sair"
    ]
    console.log(opcoes)
    let opcao = imput("Escolha a opção desejada: ")
    console.clear()
    switch(opcao) {
        case "0":
            break
        case "1":
            criar()
            break
        case "2":
            listaPorMatricula()
            break
        case "3":
            editar()
            break
        case "4":
            deletarTodos()
          break
        case "5":
          deletarPorMatricula()
          break  
    }
}