class Negociacoes {
  constructor() {
    this._negociacoes = [];
  }

  adiciona(negociacoes) {
    this._negociacoes.push(negociacoes);
  }

  paraArray() {
    return [].concat(this._negociacoes);
  }
}
