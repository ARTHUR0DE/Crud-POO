class Turma {
    #cod 
    constructor(cod, nome, sala, capacidade) {
        this.#cod = cod
        this.name = nome 
        this.sala = sala 
        this.capacidade = capacidade
    }
    get getCod() {
        return this.#cod
    }
}