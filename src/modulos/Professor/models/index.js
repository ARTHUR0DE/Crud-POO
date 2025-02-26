import { PessoaModel } from "./Pessoa.js"

export class ProfessorModel extends PessoaModel {
    constructor(nome, telefone, matricula, email, turma, disciplina, senha) {
        super(nome, telefone, email, senha, matricula)
        this.turma = turma
        this.disciplina = disciplina
    }
}