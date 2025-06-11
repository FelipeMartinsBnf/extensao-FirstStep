export class Vaga {
  constructor(id, titulo, descricao, link, localizacao, dataPublicacao, empresa, tipo) {
    this.id = id;
    this.titulo = titulo;
    this.empresa = empresa;
    this.tipo = tipo; // e.g., "estagio", "pj", "clt"
    this.descricao = descricao;
    this.link = link;
    this.localizacao = localizacao;
    this.dataPublicacao = dataPublicacao;
    this.salva = false; // Default value for saved status
  }
}