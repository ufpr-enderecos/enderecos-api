const enderecos = require('../data/enderecos.json');

class EnderecoModel {
  
  static getAll() {
    return enderecos;
  }

  static getById(id) {
    for(let i=0; i<enderecos.length; i++){
      if(enderecos[i].id == id)
        return enderecos[i];
    }

    return 404;
  }


}

module.exports = EnderecoModel;