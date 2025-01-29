const ContactRepository = require('../repositories/ContactsRepository');

class ContactController {
  async index(request, response){
    //vai listar todos os registros
    const contacts = await ContactRepository.findAll();
    response.json(contacts);
  }
  async show(request, response){
    const { id } = request.params;

    const contact = await ContactRepository.findById(id);

    if(!contact ){
      return response.status(404).json({error: 'Usuário não encontrado.'});
    }
    response.json(contact);
  }
  async store(request, response) {
    // Criar um novo registro
    const { name, email, phone, category_id } = request.body;

    // Validações
    if (!name) {
      return response.status(400).json({ error: "Name is required" });
    }

    // Verificar se o email já existe
    const contactExists = await ContactRepository.findByEmail(email);
    if (contactExists) {
      return response.status(400).json({ error: "E-mail is already taken" });
    }

    // Criar o novo contato
    const contact = await ContactRepository.create({
      name, email, phone, category_id,
    });

    return response.status(201).json(contact);  // Retorna o contato criado com status 201
  }
  async update(request, response){
    //editar um registro
    const { id } = request.params;
    const {
      name, email, phone, category_id,
    } = request.body;

    const contactExist = await ContactRepository.findById(id)
    if(!contactExist){
      return response.status(404).json({error: 'User Not Found'});
    }

    if (!name) {
      return response.status(400).json({ error: "Name is required" });
    }

    const contactByEmail = await ContactRepository.findByEmail(email);
    if (contactByEmail && contactByEmail.id != id) {
      return response.status(400).json({ error: "E-mail is already use" });
    }

    const contact = await ContactRepository.update(id, {
      name, email, phone, category_id,
    });

    response.json(contact);
  }
  async delete(request, response){
    //deletar um registro
    const { id } = request.params;

    const contactDeleted = await ContactRepository.deleteId(id);

    if(!contactDeleted){
      return response.status(404).json({error: 'Usuário não encontrado.'});
    }
    response.sendStatus(204);
  }
}

//Singleton
module.exports = new ContactController();
