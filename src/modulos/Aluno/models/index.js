export class AlunoModel {
    #matricula
    constructor(matricula, nome, email, senha) {
        this.#matricula = matricula
        this.nome = nome 
        this.email= email
        this.senha = senha
    }
    //modificador de acesso
    get getMatricula() {
        return this.#matricula
    }
}
