const EnderecoModel = require('../models/enderecoModel');

class EnderecoController {
 
  static getAll(req, res) {
    const enderecos = EnderecoModel.getAll();
    res.json(enderecos);
  }

  static getById(req, res) {
    const id = req.params.id; 
    const endereco = EnderecoModel.getById(id);
    if(endereco == 404){
      res.status(404).json({ error: `Endereço com ID ${id} não encontrado.` });
    }
    res.json(endereco);
  }
  

}

module.exports = EnderecoController;