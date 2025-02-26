export class TurmaModel {
    #cod 
    constructor(cod, nome, sala, capacidade) {
        this.#cod = cod
        this.name = nome 
        this.sala = sala 
        this.capacidade = capacidade
        this.aluno = aluno
        this.professor = professor
    }
    get getCod() {
        return this.#cod
    }
}