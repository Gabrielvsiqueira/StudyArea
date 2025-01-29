const ConstactRepository = require('../repositories/ContactsRepository');

class ContactController {
  async index(request, response){
    //vai listar todos os registros
    const contacts = await ConstactRepository.findAll();
    response.json(contacts);
  }
  show(){
    //buscar um registro
  }
  store(){
    //criar um novo registro
  }
  update(){
    //editar um registro
  }
  delete(){
    //deletar um registro
  }
}

//Singleton
module.exports = new ContactController();
