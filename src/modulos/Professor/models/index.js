export class ProfessorModel {
    #matricula
    
    constructor(matricula, turma, disciplina,) {
        this.#matricula = matricula
        this.turma = turma
        this.disciplina= disciplina
    }
    //modificador de acesso
    get getMatricula() {
        return this.#matricula
    }
} 