import { AlunoController } from "./modulos/Aluno/controllers"

const aluno1 = new AlunoController()

aluno1.criar("A9111", "Irineu", "irineu@edum.senac.br", "@123")
aluno1.criar("A9222", "Borges", "borges@edum.senac.br", "@123")

aluno1.listarTodos()

aluno1.deletarPorMatricula("a9111")
aluno1.listarTodos()

aluno1.editar('a9222',null,"borgeseditado@edum.senac.br",null)
aluno1.listarTodos()