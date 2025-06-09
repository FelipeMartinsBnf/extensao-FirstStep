export class Vaga {
  constructor(id, titulo, descricao, salario, localizacao, dataPublicacao, empresa, tipo) {
    this.id = id;
    this.titulo = titulo;
    this.empresa = empresa;
    this.tipo = tipo; // e.g., "estagio", "pj", "clt"
    this.descricao = descricao;
    this.salario = salario;
    this.localizacao = localizacao;
    this.dataPublicacao = dataPublicacao;
    this.salva = false; // Default value for saved status
  }
}